import SectionTitle from "@/components/common/SectionTitle";
import VideoCard from "@/components/videos/VideoCard";
import { VideoItem } from "@/types";

interface VideoGridSectionProps {
  title: string;
  videos: VideoItem[];
  emptyMessage: string;
}

export default function VideoGridSection({ title, videos, emptyMessage }: VideoGridSectionProps) {
  return (
    <section className="mb-8">
      <SectionTitle>{title}</SectionTitle>

      {videos.length === 0 ? (
        <div className="flex items-center justify-center rounded-lg border border-white/10 bg-[#1a1a2e] py-16 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-white/40">
            {emptyMessage}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </section>
  );
}
