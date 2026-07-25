import SectionTitle from "@/components/common/SectionTitle";
import VideoCard from "@/components/videos/VideoCard";
import { VideoItem } from "@/types";

interface NoticieroTvSectionProps {
  destacados: VideoItem[];
  fila1: VideoItem[];
  fila2: VideoItem[];
}

export default function NoticieroTvSection({
  destacados,
  fila1,
  fila2,
}: NoticieroTvSectionProps) {
  return (
    <section className="mb-8">
      <SectionTitle>Noticiero iD.tv</SectionTitle>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {destacados.map((video) => (
          <VideoCard key={video.id} video={video} size="lg" />
        ))}
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        {fila1.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        {fila2.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      <button
        type="button"
        className="w-full rounded-md border border-white/15 py-3 text-sm font-semibold uppercase tracking-wide text-white/60 transition-colors hover:border-white/30 hover:text-white"
      >
        Ver todos los videos
      </button>
    </section>
  );
}
