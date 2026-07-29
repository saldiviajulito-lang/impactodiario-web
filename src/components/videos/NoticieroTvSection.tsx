import Link from "next/link";

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
    <section className="relative mb-8">
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

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {fila2.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      <Link
        href="/categoria/noticiero"
        className="absolute bottom-2 right-2 z-10 rounded-full bg-[#16a34a] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-all hover:scale-105 hover:bg-[#15803d] hover:shadow-xl"
      >
        Ver todos los videos
      </Link>
    </section>
  );
}
