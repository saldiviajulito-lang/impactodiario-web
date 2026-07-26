import { Official, VideoItem } from "@/types";

function makeVideos(slug: string, count: number): VideoItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${slug}-${i + 1}`,
    title: `Título de la noticia ${i + 1}`,
  }));
}

function slugify(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function official(id: string, name: string, role: string): Official {
  return { id, name, role, photoUrl: `/funcionarios/${slugify(name)}.jpg` };
}

function officialsFromNames(slug: string, role: string, names: string[]): Official[] {
  return names.map((name, i) => official(`${slug}-${i + 1}`, name, role));
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
  gobernador: official("gobernador", "Gustavo Melella", "Gobernador"),
  vicegobernador: official("vicegobernador", "Mónica Urquiza", "Vicegobernadora"),
  intendentes: [
    official("intendente-rio-grande", "Martín Pérez", "Intendente Río Grande"),
    official("intendente-ushuaia", "Walter Vuoto", "Intendente Ushuaia"),
    official("intendente-tolhuin", "Daniel Harrington", "Intendente Tolhuin"),
  ],
  viceintendentaUshuaia: official(
    "viceintendenta-ushuaia",
    "Gabriela Muñíz Siccardi",
    "Viceintendenta Ushuaia",
  ),
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
