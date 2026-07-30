import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AdBar from "@/components/ads/AdBar";
import BackToHomeButton from "@/components/common/BackToHomeButton";
import CategoriaHeader from "@/components/categoria/CategoriaHeader";
import Sidebar from "@/components/sidebar/Sidebar";
import VideoGridSection from "@/components/videos/VideoGridSection";
import { getPublicacionesByCategoria } from "@/lib/publicaciones";

const CATEGORIA_LABELS: Record<string, string> = {
  noticiero: "Noticiero iD.tv",
  educacion: "Educación",
  gremiales: "Gremiales",
  nacionales: "Nacionales",
};

// Vuelve a generar la página (con las publicaciones más recientes de
// Supabase) como máximo cada 60 segundos, sin necesitar un redeploy.
export const revalidate = 60;

interface CategoriaPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(CATEGORIA_LABELS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CategoriaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const label = CATEGORIA_LABELS[slug];

  if (!label) {
    return {};
  }

  return {
    title: `${label} · Impacto Diario`,
    description: `Todos los videos de ${label} en Impacto Diario.`,
  };
}

export default async function CategoriaPage({ params }: CategoriaPageProps) {
  const { slug } = await params;
  const label = CATEGORIA_LABELS[slug];

  if (!label) {
    notFound();
  }

  const videos = await getPublicacionesByCategoria(slug);

  return (
    <div className="flex min-h-screen flex-col">
      <CategoriaHeader title={label} />

      <AdBar />

      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 py-6 lg:flex-row">
        <main className="w-full lg:w-3/4">
          <VideoGridSection
            title={label}
            videos={videos}
            emptyMessage="Próximamente videos de esta categoría"
          />
        </main>

        <Sidebar />
      </div>

      <BackToHomeButton />
    </div>
  );
}
