"use client";

import { useVideoPlayer } from "@/context/VideoPlayerContext";
import { extractYoutubeVideoId } from "@/lib/extractYoutubeId";
import { VideoItem } from "@/types";

interface VerticalVideoCardProps {
  video: VideoItem;
}

export default function VerticalVideoCard({ video }: VerticalVideoCardProps) {
  const { openVideo } = useVideoPlayer();
  const youtubeId = video.url ? extractYoutubeVideoId(video.url) : null;

  const content = (
    <div className="relative aspect-[9/16] w-[180px] overflow-hidden rounded-lg border border-white/10 bg-[#1a1a2e]">
      {video.thumbnailUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="h-full w-full object-cover"
        />
      ) : null}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors group-hover:bg-[#16a34a]">
          ▶
        </span>
      </span>
    </div>
  );

  if (!youtubeId) {
    return content;
  }

  return (
    <button
      type="button"
      onClick={() => openVideo(youtubeId)}
      className="group shrink-0"
    >
      {content}
    </button>
  );
}
