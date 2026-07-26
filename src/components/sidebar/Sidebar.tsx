import FeaturedOfficial from "@/components/sidebar/FeaturedOfficial";
import OfficialsGrid from "@/components/sidebar/OfficialsGrid";
import { officials } from "@/data/sampleData";

export default function Sidebar() {
  return (
    <aside className="w-full shrink-0 rounded-lg bg-[#12121c] p-4 lg:sticky lg:top-4 lg:w-1/4 lg:max-h-[calc(100vh-2rem)] lg:self-start lg:overflow-y-auto">
      <FeaturedOfficial official={officials.gobernador} highlight />
      <OfficialsGrid title="Intendentes" officials={officials.intendentes} />
      <FeaturedOfficial official={officials.vicegobernador} />
      <OfficialsGrid title="Legisladores Provinciales" officials={officials.legisladores} />
      <OfficialsGrid title="Concejales Río Grande" officials={officials.concejalesRioGrande} />
      <FeaturedOfficial official={officials.viceintendentaUshuaia} />
      <OfficialsGrid title="Concejales Ushuaia" officials={officials.concejalesUshuaia} />
      <OfficialsGrid title="Concejales Tolhuin" officials={officials.concejalesTolhuin} />
      <OfficialsGrid title="Senadores Nacionales" officials={officials.senadores} />
      <OfficialsGrid title="Diputados Nacionales" officials={officials.diputados} />
    </aside>
  );
}
