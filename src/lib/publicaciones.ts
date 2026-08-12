import { getSupabaseClient } from "@/lib/supabase";
import { Publicacion, VideoItem } from "@/types";

function toVideoItems(rows: Publicacion[]): VideoItem[] {
  return rows.map((row) => ({
    id: row.id,
    title: row.video_title,
    thumbnailUrl: row.thumbnail_url ?? undefined,
    url: row.video_url,
  }));
}

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

    return toVideoItems((data ?? []) as Publicacion[]);
  } catch (error) {
    console.error(`No se pudieron obtener publicaciones de Supabase para "${slug}":`, error);
    return [];
  }
}

/**
 * Trae las publicaciones activas de una categoría. "noticiero" es especial:
 * devuelve todas las publicaciones activas, sin filtrar por categoría.
 */
export async function getPublicacionesByCategoria(
  categoria: string,
  limit?: number,
): Promise<VideoItem[]> {
  try {
    const supabase = getSupabaseClient();

    let query = supabase
      .from("publicaciones")
      .select("*")
      .eq("activo", true)
      .order("created_at", { ascending: false });

    if (categoria !== "noticiero") {
      query = query.eq("categoria", categoria);
    }

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return toVideoItems((data ?? []) as Publicacion[]);
  } catch (error) {
    console.error(`No se pudieron obtener publicaciones de Supabase para categoria "${categoria}":`, error);
    return [];
  }
}
