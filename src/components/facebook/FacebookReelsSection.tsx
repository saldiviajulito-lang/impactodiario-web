"use client";

import { useEffect } from "react";

import SectionTitle from "@/components/common/SectionTitle";
import FacebookReelEmbed from "@/components/facebook/FacebookReelEmbed";
import { FacebookReel } from "@/lib/facebookReels";

declare global {
  interface Window {
    FB?: {
      XFBML: { parse: (element?: HTMLElement) => void };
    };
  }
}

interface FacebookReelsSectionProps {
  title: string;
  reels: FacebookReel[];
}

export default function FacebookReelsSection({ title, reels }: FacebookReelsSectionProps) {
  const visibleReels = reels.slice(0, 4);

  // El SDK de Facebook solo parsea los .fb-video que ya existen en el DOM
  // cuando termina de cargar. Si React monta esta sección después (o de
  // nuevo, por navegación del lado del cliente), hay que pedirle que
  // vuelva a parsear.
  useEffect(() => {
    window.FB?.XFBML?.parse();
  }, [visibleReels]);

  return (
    <section className="mb-8">
      <SectionTitle>{title}</SectionTitle>

      {visibleReels.length === 0 ? (
        <div className="flex items-center justify-center rounded-lg border border-white/10 bg-[#1a1a2e] py-16 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-white/40">
            Próximamente coberturas en vivo
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {visibleReels.map((reel) => (
            <FacebookReelEmbed key={reel.id} url={reel.url} />
          ))}
        </div>
      )}
    </section>
  );
}
