import AdBar from "@/components/ads/AdBar";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import NewsVideoSection from "@/components/videos/NewsVideoSection";
import NoticieroTvSection from "@/components/videos/NoticieroTvSection";
import { videos } from "@/data/sampleData";
import { getLatestChannelVideos } from "@/lib/youtube";
import { VideoItem } from "@/types";

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

export default async function Home() {
  const noticiero = await getNoticieroGroups();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <AdBar />

      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 py-6 lg:flex-row">
        <main className="w-full lg:w-3/4">
          <NoticieroTvSection
            destacados={noticiero.destacados}
            fila1={noticiero.fila1}
            fila2={noticiero.fila2}
          />

          <AdBar />

          <NewsVideoSection title="Policiales" items={videos.policiales} category="policiales" />

          <AdBar />

          <NewsVideoSection title="Educación" items={videos.educacion} category="educacion" />

          <AdBar />

          <NewsVideoSection title="Gremiales" items={videos.gremiales} category="gremiales" />

          <AdBar />

          <NewsVideoSection title="Nacionales" items={videos.nacionales} category="nacionales" />
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
