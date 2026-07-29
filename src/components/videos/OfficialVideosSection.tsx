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

      {videos.length === 0 ? (
        <div className="flex items-center justify-center rounded-lg border border-white/10 bg-[#1a1a2e] py-16 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-white/40">
            Próximamente videos de este funcionario
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
