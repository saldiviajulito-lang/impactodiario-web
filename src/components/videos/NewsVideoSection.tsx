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
    <section className="mb-8">
      <SectionTitle>{title}</SectionTitle>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((video) => (
          <VideoCard key={video.id} video={video} badge={badge} />
        ))}
      </div>
    </section>
  );
}
