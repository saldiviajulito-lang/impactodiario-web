import { getSupabaseClient } from "@/lib/supabase";
import { Publicacion, VideoItem } from "@/types";

/**
 * Trae las publicaciones activas de un funcionario desde Supabase
 * (tabla "publicaciones") y las convierte al formato que usa VideoCard.
 * Si Supabase no está configurado, la tabla no existe todavía, o falla
 * la consulta, devuelve un array vacío en vez de romper la página.
 */
export async function getPublicacionesByFuncionario(slug: string): Promise<VideoItem[]> {
  try {
    const supabase = getSupabaseClient();

    const { data, error } = await supabase
      .from("publicaciones")
      .select("*")
      .eq("funcionario_slug", slug)
      .eq("activo", true)
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return ((data ?? []) as Publicacion[]).map((row) => ({
      id: row.id,
      title: row.video_title,
      thumbnailUrl: row.thumbnail_url ?? undefined,
      url: row.video_url,
    }));
  } catch (error) {
    console.error(`No se pudieron obtener publicaciones de Supabase para "${slug}":`, error);
    return [];
  }
}
