/**
 * Extrae el video_id de una URL de YouTube en cualquiera de sus formatos
 * habituales (watch?v=, youtu.be/, /embed/, /shorts/). Devuelve null si
 * la URL no es de YouTube o no se pudo extraer.
 */
export function extractYoutubeVideoId(url: string): string | null {
  if (!url) return null;

  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1) || null;
    }

    if (parsed.hostname.includes("youtube.com")) {
      const v = parsed.searchParams.get("v");
      if (v) return v;

      const match = parsed.pathname.match(/\/(embed|shorts)\/([^/?]+)/);
      if (match) return match[2];
    }
  } catch {
    return null;
  }

  return null;
}
