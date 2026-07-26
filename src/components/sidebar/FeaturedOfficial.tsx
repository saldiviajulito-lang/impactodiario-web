import Link from "next/link";

import OfficialPhoto from "@/components/common/OfficialPhoto";
import { Official } from "@/types";

interface FeaturedOfficialProps {
  official: Official;
  highlight?: boolean;
}

export default function FeaturedOfficial({ official, highlight = false }: FeaturedOfficialProps) {
  return (
    <Link href={`/funcionario/${official.slug}`} className="group mb-6 block text-center">
      <OfficialPhoto
        photoUrl={official.photoUrl}
        label={official.role}
        aspect="aspect-square"
        rounded="rounded-full"
        className={highlight ? "border-4 border-[#e94560]" : "border border-white/10"}
        sizes="180px"
      />
      <p className="mt-2 text-sm font-bold text-white group-hover:text-[#e94560]">
        {official.name}
      </p>
      <p className="text-xs uppercase tracking-wide text-white/50">{official.role}</p>
    </Link>
  );
}
