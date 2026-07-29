import Link from "next/link";

import SectionTitle from "@/components/common/SectionTitle";
import VideoCard from "@/components/videos/VideoCard";
import { categoryBadges, CategoryKey } from "@/lib/categoryBadges";
import { VideoItem } from "@/types";

interface NewsVideoSectionProps {
  title: string;
  items: VideoItem[];
  category: CategoryKey;
}

export default function NewsVideoSection({ title, items, category }: NewsVideoSectionProps) {
  const badge = categoryBadges[category];

  return (
    <section className="relative mb-8">
      <SectionTitle>{title}</SectionTitle>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((video) => (
          <VideoCard key={video.id} video={video} badge={badge} />
        ))}
      </div>

      <Link
        href={`/categoria/${category}`}
        className="absolute bottom-2 right-2 z-10 rounded-full bg-[#16a34a] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-all hover:scale-105 hover:bg-[#15803d] hover:shadow-xl"
      >
        Ver todos →
      </Link>
    </section>
  );
}
