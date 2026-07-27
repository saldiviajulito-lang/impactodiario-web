import { NextResponse } from "next/server";

import { getLatestChannelVideos } from "@/lib/youtube";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const maxResults = Number(searchParams.get("maxResults")) || 10;

  try {
    const videos = await getLatestChannelVideos(maxResults);
    return NextResponse.json({ videos });
  } catch (error) {
    console.error("Error al obtener videos de YouTube:", error);
    return NextResponse.json(
      { videos: [], error: "No se pudieron obtener los videos del canal" },
      { status: 502 },
    );
  }
}
