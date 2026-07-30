"use client";

function getFormattedDate(): string {
  const formatted = new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  const withoutComma = formatted.replace(",", "");
  return withoutComma.charAt(0).toUpperCase() + withoutComma.slice(1);
}

export default function HeaderDate() {
  return (
    <p className="ml-auto text-xs font-medium text-white/80 sm:text-sm">{getFormattedDate()}</p>
  );
}
