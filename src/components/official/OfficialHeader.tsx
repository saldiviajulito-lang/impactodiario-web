import OfficialPhoto from "@/components/common/OfficialPhoto";
import { getInstitutionLine, getShortRole } from "@/lib/officialMeta";
import { Official } from "@/types";

export default function OfficialHeader({ official }: { official: Official }) {
  return (
    <header className="w-full bg-[#0a0a0f]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-6 px-4 py-8 sm:flex-row sm:items-center">
        <OfficialPhoto
          photoUrl={official.photoUrl}
          label={official.role}
          aspect="aspect-square"
          rounded="rounded-full"
          className="w-40 border-4 border-[#16a34a] sm:w-48"
          sizes="200px"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
            {official.name}
          </h1>
          <p className="mt-2 text-lg font-semibold text-[#16a34a]">{getShortRole(official)}</p>
          <p className="mt-1 text-sm text-white/50">{getInstitutionLine(official)}</p>
        </div>
      </div>
    </header>
  );
}
