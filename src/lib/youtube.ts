import { extractYoutubeVideoId } from "@/lib/extractYoutubeId";
import { VideoItem } from "@/types";

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

// Cuánto tiempo se cachea la respuesta de la YouTube Data API (evita gastar cuota
// en cada visita al sitio). 600s = 10 minutos.
const CACHE_SECONDS = 600;

export interface YoutubeVideo {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  url: string;
}

interface YoutubeThumbnail {
  url: string;
}

interface YoutubePlaylistItemsResponse {
  items?: {
    snippet: {
      title: string;
      description: string;
      publishedAt: string;
      resourceId: { videoId: string };
      thumbnails: {
        high?: YoutubeThumbnail;
        medium?: YoutubeThumbnail;
        default?: YoutubeThumbnail;
      };
    };
  }[];
}

interface YoutubeChannelsResponse {
  items?: {
    contentDetails: {
      relatedPlaylists: { uploads: string };
    };
  }[];
}

/**
 * El ID de un canal de YouTube siempre empieza con "UC", y su playlist de
 * "subidos" (uploads) es el mismo ID con el prefijo cambiado a "UU". Esto
 * evita gastar una llamada extra a channels.list en el caso normal.
 */
async function getUploadsPlaylistId(channelId: string, apiKey: string): Promise<string> {
  if (channelId.startsWith("UC")) {
    return `UU${channelId.slice(2)}`;
  }

  const url = `${YOUTUBE_API_BASE}/channels?part=contentDetails&id=${encodeURIComponent(channelId)}&key=${apiKey}`;
  const res = await fetch(url, { next: { revalidate: CACHE_SECONDS } });

  if (!res.ok) {
    throw new Error(`YouTube API error (channels.list): ${res.status}`);
  }

  const data: YoutubeChannelsResponse = await res.json();
  const uploadsPlaylistId = data.items?.[0]?.contentDetails.relatedPlaylists.uploads;

  if (!uploadsPlaylistId) {
    throw new Error(`No se encontró la playlist de subidos para el canal ${channelId}`);
  }

  return uploadsPlaylistId;
}

function pickThumbnail(thumbnails: {
  high?: YoutubeThumbnail;
  medium?: YoutubeThumbnail;
  default?: YoutubeThumbnail;
}): string {
  return thumbnails.high?.url ?? thumbnails.medium?.url ?? thumbnails.default?.url ?? "";
}

/**
 * Trae los últimos videos subidos al canal configurado en las variables de
 * entorno YOUTUBE_API_KEY y YOUTUBE_CHANNEL_ID.
 */
export async function getLatestChannelVideos(maxResults = 10): Promise<YoutubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    throw new Error(
      "Faltan las variables de entorno YOUTUBE_API_KEY y/o YOUTUBE_CHANNEL_ID en .env.local",
    );
  }

  const uploadsPlaylistId = await getUploadsPlaylistId(channelId, apiKey);

  const url = `${YOUTUBE_API_BASE}/playlistItems?part=snippet&playlistId=${encodeURIComponent(uploadsPlaylistId)}&maxResults=${maxResults}&key=${apiKey}`;
  const res = await fetch(url, { next: { revalidate: CACHE_SECONDS } });

  if (!res.ok) {
    throw new Error(`YouTube API error (playlistItems.list): ${res.status}`);
  }

  const data: YoutubePlaylistItemsResponse = await res.json();

  return (data.items ?? [])
    .filter((item) => Boolean(item.snippet?.resourceId?.videoId))
    .map((item) => {
      const { snippet } = item;
      const videoId = snippet.resourceId.videoId;

      return {
        videoId,
        title: snippet.title,
        description: snippet.description,
        thumbnailUrl: pickThumbnail(snippet.thumbnails),
        publishedAt: snippet.publishedAt,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      };
    });
}

interface YoutubeVideosListResponse {
  items?: {
    id: string;
    snippet?: {
      thumbnails?: {
        high?: YoutubeThumbnail;
        medium?: YoutubeThumbnail;
        default?: YoutubeThumbnail;
      };
    };
  }[];
}

/**
 * Filtra una lista de VideoItem dejando solo los que siguen existiendo en
 * YouTube (por ejemplo, saca los que el usuario borró después de haberlos
 * publicado), y corrige el thumbnail de cada uno con el que devuelve la
 * propia API de YouTube. Esto es necesario porque el thumbnail que se
 * guarda en Supabase al publicar usa el endpoint estático
 * img.youtube.com/vi/{id}/maxresdefault.jpg, que para videos verticales
 * (Shorts) devuelve una imagen rellenada/difuminada en 16:9 en vez del
 * cuadro real del video.
 *
 * Usa videos.list en lotes de hasta 50 ids (1 unidad de cuota por lote,
 * sin importar cuántos ids se pidan). Si no hay YOUTUBE_API_KEY
 * configurada, o falla la verificación, devuelve la lista sin tocar —
 * preferimos mostrar de más (o con el thumbnail original) antes que
 * ocultar todo por un problema temporal de la API.
 */
export async function filterAvailableVideos(items: VideoItem[]): Promise<VideoItem[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey || items.length === 0) {
    return items;
  }

  const idsByItem = items.map((item) => (item.url ? extractYoutubeVideoId(item.url) : null));
  const uniqueIds = Array.from(new Set(idsByItem.filter((id): id is string => Boolean(id))));

  if (uniqueIds.length === 0) {
    return items;
  }

  try {
    const availableIds = new Set<string>();
    const thumbnailsById = new Map<string, string>();

    for (let i = 0; i < uniqueIds.length; i += 50) {
      const chunk = uniqueIds.slice(i, i + 50);
      const url = `${YOUTUBE_API_BASE}/videos?part=id,snippet&id=${chunk.join(",")}&key=${apiKey}`;
      const res = await fetch(url, { next: { revalidate: CACHE_SECONDS } });

      if (!res.ok) {
        throw new Error(`YouTube API error (videos.list): ${res.status}`);
      }

      const data: YoutubeVideosListResponse = await res.json();
      (data.items ?? []).forEach((video) => {
        availableIds.add(video.id);
        const thumbnailUrl = video.snippet?.thumbnails ? pickThumbnail(video.snippet.thumbnails) : "";
        if (thumbnailUrl) {
          thumbnailsById.set(video.id, thumbnailUrl);
        }
      });
    }

    return items
      .map((item, index) => ({ item, id: idsByItem[index] }))
      .filter(({ id }) => {
        // Si el item no tiene id de YouTube (ej. datos de ejemplo sin url real),
        // no lo tocamos: este filtro solo saca videos de YouTube confirmados
        // como no disponibles.
        return !id || availableIds.has(id);
      })
      .map(({ item, id }) => {
        const thumbnailCorregido = id ? thumbnailsById.get(id) : undefined;
        return thumbnailCorregido ? { ...item, thumbnailUrl: thumbnailCorregido } : item;
      });
  } catch (error) {
    console.error("No se pudo verificar disponibilidad de videos en YouTube:", error);
    return items;
  }
}
