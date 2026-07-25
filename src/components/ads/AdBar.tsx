interface AdBarProps {
  imageUrl?: string;
  alt?: string;
  href?: string;
}

/**
 * Solo ocupa espacio si se le pasa una imagen/gif; si está vacía no renderiza nada.
 */
export default function AdBar({ imageUrl, alt = "Publicidad", href }: AdBarProps) {
  if (!imageUrl) return null;

  const banner = (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={imageUrl} alt={alt} className="mx-auto h-auto max-h-32 w-auto" />
  );

  return (
    <div className="my-4 w-full border-y border-neutral-200 bg-neutral-50 py-3">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {banner}
        </a>
      ) : (
        banner
      )}
    </div>
  );
}
