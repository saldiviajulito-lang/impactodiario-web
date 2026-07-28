export interface VideoItem {
  id: string;
  title: string;
  thumbnailUrl?: string;
  url?: string;
}

export interface Official {
  id: string;
  slug: string;
  name: string;
  role: string;
  category: string;
  photoUrl?: string;
}

/** Fila de la tabla "publicaciones" en Supabase. */
export interface Publicacion {
  id: string;
  created_at: string;
  video_url: string;
  video_title: string;
  thumbnail_url: string | null;
  funcionario: string;
  funcionario_slug: string;
  categoria: string;
  reel_url: string | null;
  activo: boolean;
}
