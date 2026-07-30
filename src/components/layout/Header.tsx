import Image from "next/image";

import HeaderDate from "@/components/layout/HeaderDate";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#1a1a2e] to-[#16a34a]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center gap-y-2 px-4 py-4">
        <Image
          src="/LogoIDTV.png"
          alt="impactodiario.com.ar · iD.tv"
          width={304}
          height={38}
          priority
          unoptimized
          className="h-[42px] w-auto sm:h-[52px]"
        />
        <HeaderDate />
      </div>
    </header>
  );
}
