export type CategoryKey = "policiales" | "educacion" | "gremiales" | "nacionales";

export interface CategoryBadge {
  label: string;
  color: string;
}

export const categoryBadges: Record<CategoryKey, CategoryBadge> = {
  policiales: { label: "Reel", color: "#3b5998" },
  educacion: { label: "Educación", color: "#22c55e" },
  gremiales: { label: "Gremiales", color: "#f97316" },
  nacionales: { label: "Nacionales", color: "#3b82f6" },
};
