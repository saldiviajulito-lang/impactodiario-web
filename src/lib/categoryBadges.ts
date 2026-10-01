export type CategoryKey = "policiales" | "sociales" | "gremiales" | "deportes" | "educacion";

export interface CategoryBadge {
  label: string;
  color: string;
}

export const categoryBadges: Record<CategoryKey, CategoryBadge> = {
  policiales: { label: "Policiales", color: "#ef4444" },
  sociales: { label: "Sociales", color: "#a855f7" },
  gremiales: { label: "Gremiales", color: "#f97316" },
  deportes: { label: "Deportes", color: "#eab308" },
  educacion: { label: "Educación", color: "#22c55e" },
};
