import SectionTitle from "@/components/common/SectionTitle";
import VideoCard from "@/components/videos/VideoCard";
import { VideoItem } from "@/types";

interface OfficialVideosSectionProps {
  officialName: string;
  videos: VideoItem[];
}

export default function OfficialVideosSection({
  officialName,
  videos,
}: OfficialVideosSectionProps) {
  return (
    <section className="mb-8">
      <SectionTitle>Videos de {officialName}</SectionTitle>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
