import AdBlock from "@/components/ads/AdBlock";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import NewsVideoSection from "@/components/videos/NewsVideoSection";
import NoticieroTvSection from "@/components/videos/NoticieroTvSection";
import { videos } from "@/data/sampleData";
import { CategoryKey } from "@/lib/categoryBadges";
import { getPublicacionesByCategoria } from "@/lib/publicaciones";
import { getLatestChannelVideos } from "@/lib/youtube";
import { VideoItem } from "@/types";

// Vuelve a generar la home (con las publicaciones más recientes de
// Supabase y los últimos videos de YouTube) como máximo cada 60 segundos.
export const revalidate = 60;

/**
 * Trae los últimos 10 videos del canal para las dos filas verticales (9:16)
 * de la home. Si no hay API de YouTube configurada o falla, muestra datos
 * de ejemplo en su lugar.
 */
async function getUltimosVerticales(sample: VideoItem[]): Promise<VideoItem[]> {
  try {
    const channelVideos = await getLatestChannelVideos(10);

    if (channelVideos.length === 0) {
      return sample;
    }

    return channelVideos.map((video) => ({
      id: video.videoId,
      title: video.title,
      thumbnailUrl: video.thumbnailUrl,
      url: video.url,
    }));
  } catch (error) {
    console.error("No se pudieron obtener los últimos videos verticales, usando datos de ejemplo:", error);
    return sample;
  }
}

/**
 * Trae las últimas 5 publicaciones de Supabase para el bloque de una
 * categoría en la home. Si todavía no hay publicaciones reales en esa
 * categoría, muestra los datos de ejemplo en su lugar.
 */
async function getCategoriaGroup(
  categoria: CategoryKey,
  sample: VideoItem[],
): Promise<VideoItem[]> {
  const items = await getPublicacionesByCategoria(categoria, 5);
  return items.length > 0 ? items : sample;
}

export default async function Home() {
  const [verticales, policiales, sociales, gremiales, deportes, educacion] = await Promise.all([
    getUltimosVerticales(videos.verticalesNoticiero),
    getCategoriaGroup("policiales", videos.policiales),
    getCategoriaGroup("sociales", videos.sociales),
    getCategoriaGroup("gremiales", videos.gremiales),
    getCategoriaGroup("deportes", videos.deportes),
    getCategoriaGroup("educacion", videos.educacion),
  ]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 py-6 lg:flex-row">
        <main className="w-full lg:w-3/4">
          <AdBlock block={1} />

          <NoticieroTvSection verticales={verticales} />

          <AdBlock block={2} />

          <NewsVideoSection title="Policiales" items={policiales} category="policiales" />

          <AdBlock block={3} />

          <NewsVideoSection title="Sociales" items={sociales} category="sociales" />

          <AdBlock block={4} />

          <NewsVideoSection title="Gremiales" items={gremiales} category="gremiales" />

          <AdBlock block={5} />

          <NewsVideoSection title="Deportes" items={deportes} category="deportes" />

          <AdBlock block={6} />

          <NewsVideoSection title="Educación" items={educacion} category="educacion" />
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
