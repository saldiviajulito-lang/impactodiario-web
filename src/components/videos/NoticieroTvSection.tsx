import Link from "next/link";

import SectionTitle from "@/components/common/SectionTitle";
import VerticalVideoCard from "@/components/videos/VerticalVideoCard";
import { VideoItem } from "@/types";

interface NoticieroTvSectionProps {
  verticales: VideoItem[];
}

export default function NoticieroTvSection({ verticales }: NoticieroTvSectionProps) {
  return (
    <section className="relative mb-8">
      <SectionTitle>Noticiero iD.tv</SectionTitle>

      <div className="mb-4 flex justify-center gap-4">
        {verticales.slice(0, 5).map((video) => (
          <VerticalVideoCard key={video.id} video={video} />
        ))}
      </div>

      <div className="flex justify-center gap-4">
        {verticales.slice(5, 10).map((video) => (
          <VerticalVideoCard key={video.id} video={video} />
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
