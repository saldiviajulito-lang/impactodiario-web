import OfficialCard from "@/components/sidebar/OfficialCard";
import { Official } from "@/types";

interface OfficialsGridProps {
  title: string;
  officials: Official[];
}

export default function OfficialsGrid({ title, officials }: OfficialsGridProps) {
  return (
    <section className="mb-6">
      <h3 className="mb-3 border-b-2 border-red-600 pb-1 text-xs font-bold uppercase tracking-wide text-neutral-700">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {officials.map((official) => (
          <OfficialCard key={official.id} official={official} />
        ))}
      </div>
    </section>
  );
}
