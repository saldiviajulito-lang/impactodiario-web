import FeaturedOfficial from "@/components/sidebar/FeaturedOfficial";
import OfficialsGrid from "@/components/sidebar/OfficialsGrid";
import { Official } from "@/types";

interface SidebarProps {
  gobernador: Official;
  vicegobernador: Official;
  intendentes: Official[];
  viceintendentaUshuaia: Official;
  legisladores: Official[];
  concejalesRioGrande: Official[];
  concejalesUshuaia: Official[];
  concejalesTolhuin: Official[];
  senadores: Official[];
  diputados: Official[];
}

export default function Sidebar({
  gobernador,
  vicegobernador,
  intendentes,
  viceintendentaUshuaia,
  legisladores,
  concejalesRioGrande,
  concejalesUshuaia,
  concejalesTolhuin,
  senadores,
  diputados,
}: SidebarProps) {
  return (
    <aside className="w-full shrink-0 rounded-lg bg-[#12121c] p-4 lg:sticky lg:top-4 lg:w-1/4 lg:max-h-[calc(100vh-2rem)] lg:self-start lg:overflow-y-auto">
      <FeaturedOfficial official={gobernador} highlight />
      <OfficialsGrid title="Intendentes" officials={intendentes} />
      <FeaturedOfficial official={vicegobernador} />
      <OfficialsGrid title="Legisladores Provinciales" officials={legisladores} />
      <OfficialsGrid title="Concejales Río Grande" officials={concejalesRioGrande} />
      <FeaturedOfficial official={viceintendentaUshuaia} />
      <OfficialsGrid title="Concejales Ushuaia" officials={concejalesUshuaia} />
      <OfficialsGrid title="Concejales Tolhuin" officials={concejalesTolhuin} />
      <OfficialsGrid title="Senadores Nacionales" officials={senadores} />
      <OfficialsGrid title="Diputados Nacionales" officials={diputados} />
    </aside>
  );
}
