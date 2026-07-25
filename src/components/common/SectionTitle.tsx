interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="mb-4 border-b-4 border-red-600 pb-2 text-xl font-bold uppercase tracking-wide text-neutral-900">
      {children}
    </h2>
  );
}
