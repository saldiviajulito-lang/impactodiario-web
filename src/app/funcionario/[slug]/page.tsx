import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AdBar from "@/components/ads/AdBar";
import OfficialHeader from "@/components/official/OfficialHeader";
import Sidebar from "@/components/sidebar/Sidebar";
import OfficialVideosSection from "@/components/videos/OfficialVideosSection";
import { getAllOfficials, getOfficialBySlug } from "@/data/sampleData";
import { getPublicacionesByFuncionario } from "@/lib/publicaciones";

// Vuelve a generar la página (con las publicaciones más recientes de
// Supabase) como máximo cada 10 minutos, sin necesitar un redeploy.
export const revalidate = 600;

interface FuncionarioPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllOfficials().map((official) => ({ slug: official.slug }));
}

export async function generateMetadata({
  params,
}: FuncionarioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const official = getOfficialBySlug(slug);

  if (!official) {
    return {};
  }

  return {
    title: `${official.name} · Impacto Diario`,
    description: `${official.role} — noticias y videos de ${official.name}.`,
  };
}

export default async function FuncionarioPage({ params }: FuncionarioPageProps) {
  const { slug } = await params;
  const official = getOfficialBySlug(slug);

  if (!official) {
    notFound();
  }

  const videos = await getPublicacionesByFuncionario(official.slug);

  return (
    <div className="flex min-h-screen flex-col">
      <OfficialHeader official={official} />

      <AdBar />

      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 py-6 lg:flex-row">
        <main className="w-full lg:w-3/4">
          <OfficialVideosSection officialName={official.name} videos={videos} />
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
