import AdBlock from "@/components/ads/AdBlock";
import FacebookReelsSection from "@/components/facebook/FacebookReelsSection";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import NewsVideoSection from "@/components/videos/NewsVideoSection";
import NoticieroTvSection from "@/components/videos/NoticieroTvSection";
import { videos } from "@/data/sampleData";
import { CategoryKey } from "@/lib/categoryBadges";
import { policialesReels } from "@/lib/facebookReels";
import { getPublicacionesByCategoria } from "@/lib/publicaciones";
import { getLatestChannelVideos } from "@/lib/youtube";
import { VideoItem } from "@/types";

// Vuelve a generar la home (con las publicaciones más recientes de
// Supabase y los últimos videos de YouTube) como máximo cada 60 segundos.
export const revalidate = 60;

interface NoticieroGroups {
  destacados: VideoItem[];
  fila1: VideoItem[];
  fila2: VideoItem[];
}

const SAMPLE_NOTICIERO_GROUPS: NoticieroGroups = {
  destacados: videos.noticieroDestacados,
  fila1: videos.noticieroFila1,
  fila2: videos.noticieroFila2,
};

async function getNoticieroGroups(): Promise<NoticieroGroups> {
  try {
    const channelVideos = await getLatestChannelVideos(10);

    if (channelVideos.length === 0) {
      return SAMPLE_NOTICIERO_GROUPS;
    }

    const items: VideoItem[] = channelVideos.map((video) => ({
      id: video.videoId,
      title: video.title,
      thumbnailUrl: video.thumbnailUrl,
      url: video.url,
    }));

    return {
      destacados: items.slice(0, 2),
      fila1: items.slice(2, 6),
      fila2: items.slice(6, 10),
    };
  } catch (error) {
    // Sin YOUTUBE_API_KEY / YOUTUBE_CHANNEL_ID configuradas, o error de la API:
    // mostramos los datos de ejemplo en vez de romper la home.
    console.error("No se pudieron obtener videos de YouTube, usando datos de ejemplo:", error);
    return SAMPLE_NOTICIERO_GROUPS;
  }
}

/**
 * Trae las últimas 4 publicaciones de Supabase para el bloque de una
 * categoría en la home. Si todavía no hay publicaciones reales en esa
 * categoría, muestra los datos de ejemplo en su lugar.
 */
async function getCategoriaGroup(
  categoria: CategoryKey,
  sample: VideoItem[],
): Promise<VideoItem[]> {
  const items = await getPublicacionesByCategoria(categoria, 4);
  return items.length > 0 ? items : sample;
}

export default async function Home() {
  const [noticiero, educacion, gremiales, nacionales] = await Promise.all([
    getNoticieroGroups(),
    getCategoriaGroup("educacion", videos.educacion),
    getCategoriaGroup("gremiales", videos.gremiales),
    getCategoriaGroup("nacionales", videos.nacionales),
  ]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 py-6 lg:flex-row">
        <main className="w-full lg:w-3/4">
          <AdBlock block={1} />

          <NoticieroTvSection
            destacados={noticiero.destacados}
            fila1={noticiero.fila1}
            fila2={noticiero.fila2}
          />

          <AdBlock block={2} />

          <FacebookReelsSection title="Policiales" reels={policialesReels} />

          <AdBlock block={3} />

          <NewsVideoSection title="Educación" items={educacion} category="educacion" />

          <AdBlock block={4} />

          <NewsVideoSection title="Gremiales" items={gremiales} category="gremiales" />

          <AdBlock block={5} />

          <NewsVideoSection title="Nacionales" items={nacionales} category="nacionales" />
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
