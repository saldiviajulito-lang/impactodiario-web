export default function CategoriaHeader({ title }: { title: string }) {
  return (
    <header className="w-full border-b border-white/10 bg-[#0a0a0f]">
      <div className="mx-auto flex w-full max-w-[1400px] items-center px-4 py-10">
        <h1 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
          {title}
        </h1>
      </div>
    </header>
  );
}
