interface FacebookReelEmbedProps {
  url: string;
}

export default function FacebookReelEmbed({ url }: FacebookReelEmbedProps) {
  return (
    <div className="aspect-[9/16] overflow-hidden rounded-lg border border-white/10 bg-[#1a1a2e]">
      <div
        className="fb-video"
        data-href={url}
        data-width="auto"
        data-show-text="false"
        data-autoplay="false"
      />
    </div>
  );
}
