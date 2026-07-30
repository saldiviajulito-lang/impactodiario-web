"use client";

import { useEffect } from "react";

import { useVideoPlayer } from "@/context/VideoPlayerContext";

export default function VideoPlayerModal() {
  const { openVideoId, closeVideo } = useVideoPlayer();

  useEffect(() => {
    if (!openVideoId) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeVideo();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openVideoId, closeVideo]);

  if (!openVideoId) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
      onClick={closeVideo}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeVideo}
          aria-label="Cerrar video"
          className="absolute -top-10 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition-colors hover:bg-white/20 sm:-top-12"
        >
          ×
        </button>

        <div className="aspect-video w-full overflow-hidden rounded-lg bg-black shadow-2xl">
          <iframe
            key={openVideoId}
            src={`https://www.youtube.com/embed/${openVideoId}?autoplay=1`}
            title="Reproductor de video"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
