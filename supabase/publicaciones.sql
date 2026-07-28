-- Tabla "publicaciones": videos/reels publicados desde noticiero-ia y
-- mostrados en impactodiario-web.
-- Ejecutar en Supabase: Dashboard -> SQL Editor -> pegar y correr.

create extension if not exists pgcrypto;

create table if not exists publicaciones (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  video_url text not null,
  video_title text not null,
  thumbnail_url text,
  funcionario text not null,
  funcionario_slug text not null,
  categoria text not null,
  reel_url text,
  activo boolean not null default true
);

-- Índices para los filtros más probables (por funcionario, por categoría,
-- y "solo las activas", que van a ser casi todas las consultas del sitio).
create index if not exists publicaciones_funcionario_slug_idx
  on publicaciones (funcionario_slug);
create index if not exists publicaciones_categoria_idx
  on publicaciones (categoria);
create index if not exists publicaciones_activo_idx
  on publicaciones (activo);

-- Row Level Security: la anon key (la que usa este sitio para LEER) solo
-- puede ver publicaciones activas. No hay policy de insert/update/delete
-- para anon, así que escribir filas requiere la service_role key desde
-- noticiero-ia (que ignora RLS) — la anon key nunca puede modificar datos.
alter table publicaciones enable row level security;

create policy "Publicaciones activas son visibles publicamente"
  on publicaciones for select
  using (activo = true);
