export interface FacebookReel {
  id: string;
  url: string;
}

/**
 * Reels de Facebook para el bloque Policiales (hasta 4). El SDK de Facebook
 * embebe cada reel a partir de su URL exacta — no hay forma de traer "los
 * últimos reels" automáticamente sin la Graph API (Page Access Token).
 *
 * Para agregar uno: copiá la URL del reel desde facebook.com/impactodiariotdf
 * (botón "Compartir" → "Copiar enlace", con el formato
 * https://www.facebook.com/reel/XXXXXXXXXXXXXXX) y agregala acá abajo.
 * Mientras la lista esté vacía se muestra "Próximamente coberturas en vivo".
 */
export const policialesReels: FacebookReel[] = [];
