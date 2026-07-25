import Thumb from "@/components/common/Thumb";
import { Official } from "@/types";

export default function OfficialCard({ official }: { official: Official }) {
  return (
    <a href="#" className="group block text-center">
      <Thumb label={official.role} aspect="aspect-square" rounded="rounded-full" />
      <p className="mt-1 truncate text-[11px] font-semibold text-neutral-800 group-hover:text-red-600">
        {official.name}
      </p>
      <p className="truncate text-[10px] text-neutral-500">{official.role}</p>
    </a>
  );
}
