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
