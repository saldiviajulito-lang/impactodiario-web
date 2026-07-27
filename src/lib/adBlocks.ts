import { promises as fs } from "fs";
import path from "path";

const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif"];

/**
 * Busca una imagen/gif dentro de public/publicidades/bloque-{block}/.
 * Devuelve su URL pública si encuentra una, o null si la carpeta está
 * vacía (o solo tiene el .gitkeep) para que el bloque no ocupe espacio.
 */
export async function getAdBlockImageUrl(block: number): Promise<string | null> {
  const folder = `bloque-${block}`;
  const dirPath = path.join(process.cwd(), "public", "publicidades", folder);

  let files: string[];
  try {
    files = await fs.readdir(dirPath);
  } catch {
    return null;
  }

  const imageFile = files
    .sort()
    .find((file) => ALLOWED_EXTENSIONS.includes(path.extname(file).toLowerCase()));

  if (!imageFile) {
    return null;
  }

  return `/publicidades/${folder}/${imageFile}`;
}
