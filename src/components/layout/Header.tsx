import Image from "next/image";

import HeaderDate from "@/components/layout/HeaderDate";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#1a1a2e] to-[#16a34a]">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-5">
        <Image
          src="/LogoIDTV.png"
          alt="impactodiario.com.ar · iD.tv"
          width={304}
          height={38}
          priority
          unoptimized
          className="h-8 w-auto sm:h-10"
        />
        <HeaderDate />
      </div>
    </header>
  );
}
