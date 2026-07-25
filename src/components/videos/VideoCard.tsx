import Thumb from "@/components/common/Thumb";
import { CategoryBadge } from "@/lib/categoryBadges";
import { VideoItem } from "@/types";

interface VideoCardProps {
  video: VideoItem;
  size?: "lg" | "md";
  badge?: CategoryBadge;
}

export default function VideoCard({ video, size = "md", badge }: VideoCardProps) {
  return (
    <a
      href="#"
      className="group block overflow-hidden rounded-lg border border-white/10 bg-[#1a1a2e] transition-colors hover:border-[#e94560]/60"
    >
      <div className="relative">
        <Thumb label={video.title} aspect="aspect-video" rounded="rounded-none" />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors group-hover:bg-[#e94560]">
            ▶
          </span>
        </span>
        {badge && (
          <span
            className="absolute left-2 top-2 rounded px-2 py-0.5 text-[10px] font-semibold uppercase text-white"
            style={{ backgroundColor: badge.color }}
          >
            {badge.label}
          </span>
        )}
      </div>
      <p
        className={`px-3 py-2 line-clamp-2 font-medium text-white group-hover:text-[#e94560] ${
          size === "lg" ? "text-base" : "text-sm"
        }`}
      >
        {video.title}
      </p>
    </a>
  );
}
