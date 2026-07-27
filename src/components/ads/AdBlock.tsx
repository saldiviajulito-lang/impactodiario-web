import { getAdBlockImageUrl } from "@/lib/adBlocks";

interface AdBlockProps {
  block: number;
}

/**
 * Banner de publicidad ancho completo. Busca una imagen/gif en
 * public/publicidades/bloque-{block}/ en cada render del servidor; si no
 * hay ninguna, no renderiza nada (no ocupa espacio).
 */
export default async function AdBlock({ block }: AdBlockProps) {
  const imageUrl = await getAdBlockImageUrl(block);

  if (!imageUrl) {
    return null;
  }

  return (
    <div className="my-4 w-full animate-[fadeInUp_0.5s_ease-out]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={`Publicidad ${block}`}
        className="w-full rounded-lg border border-white/10"
      />
    </div>
  );
}
