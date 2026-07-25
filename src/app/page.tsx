import AdBar from "@/components/ads/AdBar";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import NewsVideoSection from "@/components/videos/NewsVideoSection";
import NoticieroTvSection from "@/components/videos/NoticieroTvSection";
import { officials, videos } from "@/data/sampleData";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <AdBar />

      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 py-6 lg:flex-row">
        <main className="w-full lg:w-3/4">
          <NoticieroTvSection
            destacados={videos.noticieroDestacados}
            fila1={videos.noticieroFila1}
            fila2={videos.noticieroFila2}
          />

          <AdBar />

          <NewsVideoSection title="Policiales" items={videos.policiales} badge="Reel" />

          <AdBar />

          <NewsVideoSection title="Educación" items={videos.educacion} />

          <AdBar />

          <NewsVideoSection title="Gremiales" items={videos.gremiales} />

          <AdBar />

          <NewsVideoSection title="Nacionales" items={videos.nacionales} />
        </main>

        <Sidebar
          gobernador={officials.gobernador}
          vicegobernador={officials.vicegobernador}
          intendentes={officials.intendentes}
          legisladores={officials.legisladores}
          concejalesRioGrande={officials.concejalesRioGrande}
          concejalesUshuaia={officials.concejalesUshuaia}
          concejalesTolhuin={officials.concejalesTolhuin}
          senadores={officials.senadores}
          diputados={officials.diputados}
        />
      </div>
    </div>
  );
}
