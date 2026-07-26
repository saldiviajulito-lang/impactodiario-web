import { Official, VideoItem } from "@/types";

function makeVideos(slug: string, count: number): VideoItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${slug}-${i + 1}`,
    title: `Título de la noticia ${i + 1}`,
  }));
}

function officialsFromNames(slug: string, role: string, names: string[]): Official[] {
  return names.map((name, i) => ({
    id: `${slug}-${i + 1}`,
    name,
    role,
  }));
}

export const videos = {
  noticieroDestacados: makeVideos("noticiero-destacado", 2),
  noticieroFila1: makeVideos("noticiero-fila1", 4),
  noticieroFila2: makeVideos("noticiero-fila2", 4),
  policiales: makeVideos("policiales", 4),
  educacion: makeVideos("educacion", 4),
  gremiales: makeVideos("gremiales", 4),
  nacionales: makeVideos("nacionales", 4),
};

export const officials = {
  gobernador: { id: "gobernador", name: "Gustavo Melella", role: "Gobernador" } as Official,
  vicegobernador: { id: "vicegobernador", name: "Mónica Urquiza", role: "Vicegobernadora" } as Official,
  intendentes: [
    { id: "intendente-rio-grande", name: "Martín Pérez", role: "Intendente Río Grande" },
    { id: "intendente-ushuaia", name: "Walter Vuoto", role: "Intendente Ushuaia" },
    { id: "intendente-tolhuin", name: "Daniel Harrington", role: "Intendente Tolhuin" },
  ] as Official[],
  viceintendentaUshuaia: {
    id: "viceintendenta-ushuaia",
    name: "Gabriela Muñíz Siccardi",
    role: "Viceintendenta Ushuaia",
  } as Official,
  legisladores: officialsFromNames("legislador", "Legislador Provincial", [
    "Federico Grave",
    "Federico Sciurano",
    "Myriam Martínez",
    "Juan C. Pino",
    "María V. Vuoto",
    "Virgilio T. García",
    "Raúl Von Der Tusen",
    "Jorge A. Lechman",
    "Natalia Graciania",
    "Luciano J. Selzer",
    "Damian Loffler",
    "Pablo G. Villegas",
    "María L. Colazo",
    "Juan M. Lapadula",
    "Gisela Dos Santos",
  ]),
  concejalesRioGrande: officialsFromNames("concejal-rg", "Concejal Río Grande", [
    "Guadalupe Zamora",
    "Alejandra Arce",
    "Lucia Rossi",
    "Jonatan Bogado",
    "Federico Runín",
    "Matías Loffler",
    "Walter Abregú",
    "Maximiliano Ybars",
    "Florencia Vargas",
  ]),
  concejalesUshuaia: officialsFromNames("concejal-ush", "Concejal Ushuaia", [
    "Laura Ávila",
    "Gabriela de la Vega",
    "Nicolás Pelloli",
    "Vanina O. Maldonado",
    "Daiana Freiberger",
    "Fernando Santana",
    "Analía L. Escalante",
    "Vladimir Espeche",
    "María Monte de Oca",
    "Valter Tavarone",
  ]),
  concejalesTolhuin: officialsFromNames("concejal-tol", "Concejal Tolhuin", [
    "Matías Rodríguez",
    "Rosana Taberna",
    "Jeannette Alderete",
    "Marcelo M. Muñoz",
    "María F. Auat",
  ]),
  senadores: officialsFromNames("senador", "Senador Nacional", [
    "Agustín Coto",
    "Belén Monte de Oca",
    "Cristina López",
  ]),
  diputados: officialsFromNames("diputado", "Diputado Nacional", [
    "Andrea Freites",
    "Jorge Araujo",
    "Santiago Pauli",
    "Víctor Hugo Ponce",
    "Viviana Salamanca",
  ]),
};
