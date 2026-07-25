import { Official, VideoItem } from "@/types";

function makeVideos(slug: string, count: number): VideoItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${slug}-${i + 1}`,
    title: `Título de la noticia ${i + 1}`,
  }));
}

function makeOfficials(slug: string, role: string, count: number): Official[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${slug}-${i + 1}`,
    name: `Nombre Apellido ${i + 1}`,
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
  gobernador: { id: "gobernador", name: "Nombre Apellido", role: "Gobernador" } as Official,
  vicegobernador: { id: "vicegobernador", name: "Nombre Apellido", role: "Vicegobernador" } as Official,
  intendentes: [
    { id: "intendente-rio-grande", name: "Nombre Apellido", role: "Intendente Río Grande" },
    { id: "intendente-ushuaia", name: "Nombre Apellido", role: "Intendente Ushuaia" },
    { id: "intendente-tolhuin", name: "Nombre Apellido", role: "Intendente Tolhuin" },
  ] as Official[],
  legisladores: makeOfficials("legislador", "Legislador Provincial", 15),
  concejalesRioGrande: makeOfficials("concejal-rg", "Concejal Río Grande", 9),
  concejalesUshuaia: makeOfficials("concejal-ush", "Concejal Ushuaia", 7),
  concejalesTolhuin: makeOfficials("concejal-tol", "Concejal Tolhuin", 5),
  senadores: makeOfficials("senador", "Senador Nacional", 3),
  diputados: makeOfficials("diputado", "Diputado Nacional", 5),
};
