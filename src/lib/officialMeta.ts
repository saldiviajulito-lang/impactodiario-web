import { Official } from "@/types";

const INSTITUTIONS_BY_CATEGORY: Record<string, string> = {
  GOBERNADOR: "Poder Ejecutivo Provincial",
  "VICE-GOBERNADORA": "Poder Ejecutivo Provincial",
  LEGISLADORES: "Legislatura Provincial",
  "CONCEJALES-RG": "Concejo Deliberante de Río Grande",
  "CONCEJALES-USH": "Concejo Deliberante de Ushuaia",
  "CONCEJALES-TOLH": "Concejo Deliberante de Tolhuin",
  SENADORES: "Senado de la Nación",
  DIPUTADOS: "Cámara de Diputados de la Nación",
};

const CITY_SUFFIX = /\s+(Río Grande|Ushuaia|Tolhuin)$/;

export function getInstitution(official: Official): string {
  if (official.category === "INTENDENTES") {
    const city = official.role.match(CITY_SUFFIX)?.[1] ?? "";
    return `Municipalidad de ${city}`;
  }
  return INSTITUTIONS_BY_CATEGORY[official.category] ?? official.role;
}

export function getShortRole(official: Official): string {
  return official.role.replace(CITY_SUFFIX, "");
}

export function getInstitutionLine(official: Official): string {
  return `${getInstitution(official)} · Provincia de Tierra del Fuego`;
}
