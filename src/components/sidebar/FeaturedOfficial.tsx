import Thumb from "@/components/common/Thumb";
import { Official } from "@/types";

export default function FeaturedOfficial({ official }: { official: Official }) {
  return (
    <a href="#" className="group mb-6 block text-center">
      <Thumb label={official.role} aspect="aspect-[4/5]" rounded="rounded-lg" />
      <p className="mt-2 text-sm font-bold text-neutral-900 group-hover:text-red-600">
        {official.name}
      </p>
      <p className="text-xs uppercase tracking-wide text-neutral-500">{official.role}</p>
    </a>
  );
}
