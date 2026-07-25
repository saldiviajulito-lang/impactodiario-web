interface ThumbProps {
  label: string;
  aspect?: string;
  rounded?: string;
  className?: string;
}

export default function Thumb({
  label,
  aspect = "aspect-video",
  rounded = "rounded-md",
  className = "",
}: ThumbProps) {
  return (
    <div
      className={`${aspect} ${rounded} flex items-center justify-center overflow-hidden bg-white/5 px-2 text-center text-[11px] font-medium text-white/30 ${className}`}
    >
      {label}
    </div>
  );
}
