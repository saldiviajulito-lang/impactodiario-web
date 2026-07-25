export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#1a1a2e] to-[#e94560]">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-center px-4 py-6">
        <p className="text-center text-lg font-extrabold uppercase tracking-[0.15em] text-white sm:text-2xl">
          impactodiario.com.ar
          <span className="mx-3 text-white/60">·</span>
          iD.tv
        </p>
      </div>
    </header>
  );
}
