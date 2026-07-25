import Thumb from "@/components/common/Thumb";
import { Official } from "@/types";

export default function OfficialCard({ official }: { official: Official }) {
  return (
    <a href="#" className="group block text-center">
      <Thumb
        label={official.role}
        aspect="aspect-square"
        rounded="rounded-full"
        className="border border-white/10"
      />
      <p className="mt-1 truncate text-[11px] font-semibold text-white group-hover:text-[#e94560]">
        {official.name}
      </p>
      <p className="truncate text-[10px] text-white/50">{official.role}</p>
    </a>
  );
}
