import Thumb from "@/components/common/Thumb";
import { VideoItem } from "@/types";

interface VideoCardProps {
  video: VideoItem;
  size?: "lg" | "md";
  badge?: string;
}

export default function VideoCard({ video, size = "md", badge }: VideoCardProps) {
  return (
    <a href="#" className="group block">
      <div className="relative">
        <Thumb label={video.title} aspect="aspect-video" />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors group-hover:bg-red-600">
            ▶
          </span>
        </span>
        {badge && (
          <span className="absolute left-2 top-2 rounded bg-red-600 px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
            {badge}
          </span>
        )}
      </div>
      <p
        className={`mt-2 line-clamp-2 font-medium text-neutral-800 group-hover:text-red-600 ${
          size === "lg" ? "text-base" : "text-sm"
        }`}
      >
        {video.title}
      </p>
    </a>
  );
}
