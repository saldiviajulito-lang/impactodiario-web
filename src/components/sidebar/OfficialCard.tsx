import Link from "next/link";

import OfficialPhoto from "@/components/common/OfficialPhoto";
import { Official } from "@/types";

export default function OfficialCard({ official }: { official: Official }) {
  return (
    <Link href={`/funcionario/${official.slug}`} className="group block text-center">
      <OfficialPhoto
        photoUrl={official.photoUrl}
        label={official.role}
        aspect="aspect-square"
        rounded="rounded-full"
        className="border border-white/10"
        sizes="80px"
      />
      <p className="mt-1 truncate text-[11px] font-semibold text-white group-hover:text-[#e94560]">
        {official.name}
      </p>
      <p className="truncate text-[10px] text-white/50">{official.role}</p>
    </Link>
  );
}
