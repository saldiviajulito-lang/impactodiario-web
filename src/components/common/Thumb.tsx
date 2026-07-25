interface ThumbProps {
  label: string;
  aspect?: string;
  rounded?: string;
}

export default function Thumb({
  label,
  aspect = "aspect-video",
  rounded = "rounded-md",
}: ThumbProps) {
  return (
    <div
      className={`${aspect} ${rounded} flex items-center justify-center overflow-hidden bg-neutral-200 px-2 text-center text-[11px] font-medium text-neutral-400`}
    >
      {label}
    </div>
  );
}
