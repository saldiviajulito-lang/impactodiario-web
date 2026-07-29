interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="mb-4 border-l-[6px] border-[#14532d] bg-[#16a34a] px-4 py-2 text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
      {children}
    </h2>
  );
}
