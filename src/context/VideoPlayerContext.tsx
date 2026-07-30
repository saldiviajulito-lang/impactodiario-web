"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface VideoPlayerContextValue {
  openVideoId: string | null;
  openVideo: (videoId: string) => void;
  closeVideo: () => void;
}

const VideoPlayerContext = createContext<VideoPlayerContextValue | null>(null);

export function VideoPlayerProvider({ children }: { children: ReactNode }) {
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);

  return (
    <VideoPlayerContext.Provider
      value={{
        openVideoId,
        openVideo: (videoId: string) => setOpenVideoId(videoId),
        closeVideo: () => setOpenVideoId(null),
      }}
    >
      {children}
    </VideoPlayerContext.Provider>
  );
}

export function useVideoPlayer(): VideoPlayerContextValue {
  const context = useContext(VideoPlayerContext);
  if (!context) {
    throw new Error("useVideoPlayer debe usarse dentro de <VideoPlayerProvider>");
  }
  return context;
}
