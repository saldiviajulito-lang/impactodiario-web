import SectionTitle from "@/components/common/SectionTitle";
import VideoCard from "@/components/videos/VideoCard";
import { VideoItem } from "@/types";

interface NewsVideoSectionProps {
  title: string;
  items: VideoItem[];
  badge?: string;
}

export default function NewsVideoSection({ title, items, badge }: NewsVideoSectionProps) {
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
