import Link from "next/link";

export default function BackToHomeButton() {
  return (
    <Link
      href="/"
      aria-label="Volver al inicio"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-[#16a34a] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-all hover:scale-105 hover:bg-[#15803d] hover:shadow-xl sm:bottom-6 sm:right-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 shrink-0"
        aria-hidden="true"
      >
        <path d="M3 9.5 12 3l9 6.5" />
        <path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
      </svg>
      Inicio
    </Link>
  );
}
