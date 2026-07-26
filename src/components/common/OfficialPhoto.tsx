"use client";

import Image from "next/image";
import { useState } from "react";

import Thumb from "@/components/common/Thumb";

interface OfficialPhotoProps {
  photoUrl?: string;
  label: string;
  aspect?: string;
  rounded?: string;
  className?: string;
  sizes?: string;
}

export default function OfficialPhoto({
  photoUrl,
  label,
  aspect = "aspect-square",
  rounded = "rounded-full",
  className = "",
  sizes = "150px",
}: OfficialPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (!photoUrl || failed) {
    return <Thumb label={label} aspect={aspect} rounded={rounded} className={className} />;
  }

  return (
    <div className={`relative ${aspect} ${rounded} overflow-hidden bg-white/5 ${className}`}>
      <Image
        src={photoUrl}
        alt={label}
        fill
        sizes={sizes}
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
