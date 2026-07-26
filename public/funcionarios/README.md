# Fotos de funcionarios

Las fotos están organizadas en subcarpetas por cargo. Guardá cada foto en
formato `.jpg` o `.png`, cuadrada (o lo más cuadrada posible, porque se
recorta en círculo), dentro de la carpeta que le corresponde. El nombre del
archivo sale automáticamente a partir del nombre en `src/data/sampleData.ts`
(ver función `slugify`).

Si un archivo no existe todavía, el sitio muestra el placeholder gris
automáticamente. No hace falta tocar código: apenas subís el archivo con el
nombre correcto en la carpeta correcta, la foto aparece sola.

> ⚠️ **El nombre del archivo tiene que ser EXACTO**: todo en minúsculas, sin
> espacios (usá guiones `-`), sin prefijos como "Intendente" o el cargo, y
> con la extensión indicada en la tabla de abajo (`.jpg` o `.png`, no son
> intercambiables porque cada funcionario tiene una extensión fija en
> `sampleData.ts`). Por ejemplo `martin-perez.jpg`, **no**
> `Intendentemartin perez.jpg` ni `martin-perez.png`.

## Estructura de carpetas

```
public/funcionarios/
  GOBERNADOR/
  VICE-GOBERNADORA/
  INTENDENTES/        (incluye los 3 intendentes y la viceintendenta de Ushuaia)
  LEGISLADORES/
  CONCEJALES-RG/       (Río Grande)
  CONCEJALES-USH/      (Ushuaia)
  CONCEJALES-TOLH/     (Tolhuin)
  SENADORES/
  DIPUTADOS/
```

## GOBERNADOR/

| Nombre | Archivo esperado |
|---|---|
| Gustavo Melella | `gustavo-melella.png` |

## VICE-GOBERNADORA/

| Nombre | Archivo esperado |
|---|---|
| Mónica Urquiza | `monica-urquiza.png` |

## INTENDENTES/

| Cargo | Nombre | Archivo esperado |
|---|---|---|
| Intendente Río Grande | Martín Pérez | `martin-perez.jpg` |
| Intendente Ushuaia | Walter Vuoto | `walter-vuoto.jpg` |
| Intendente Tolhuin | Daniel Harrington | `daniel-harrington.jpg` |
| Viceintendenta Ushuaia | Gabriela Muñíz Siccardi | `gabriela-muniz-siccardi.jpg` |

## LEGISLADORES/

| Nombre | Archivo esperado |
|---|---|
| Federico Grave | `federico-grave.jpg` |
| Federico Sciurano | `federico-sciurano.jpg` |
| Myriam Martínez | `myriam-martinez.jpg` |
| Juan C. Pino | `juan-c-pino.jpg` |
| María V. Vuoto | `maria-v-vuoto.jpg` |
| Virgilio T. García | `virgilio-t-garcia.jpg` |
| Raúl Von Der Tusen | `raul-von-der-tusen.jpg` |
| Jorge A. Lechman | `jorge-a-lechman.jpg` |
| Natalia Graciania | `natalia-graciania.jpg` |
| Luciano J. Selzer | `luciano-j-selzer.jpg` |
| Damian Loffler | `damian-loffler.jpg` |
| Pablo G. Villegas | `pablo-g-villegas.jpg` |
| María L. Colazo | `maria-l-colazo.jpg` |
| Juan M. Lapadula | `juan-m-lapadula.jpg` |
| Gisela Dos Santos | `gisela-dos-santos.jpg` |

## CONCEJALES-RG/ (Río Grande)

| Nombre | Archivo esperado |
|---|---|
| Guadalupe Zamora | `guadalupe-zamora.jpg` |
| Alejandra Arce | `alejandra-arce.jpg` |
| Lucia Rossi | `lucia-rossi.jpg` |
| Jonatan Bogado | `jonatan-bogado.jpg` |
| Federico Runín | `federico-runin.jpg` |
| Matías Loffler | `matias-loffler.jpg` |
| Walter Abregú | `walter-abregu.jpg` |
| Maximiliano Ybars | `maximiliano-ybars.jpg` |
| Florencia Vargas | `florencia-vargas.jpg` |

## CONCEJALES-USH/ (Ushuaia)

| Nombre | Archivo esperado |
|---|---|
| Laura Ávila | `laura-avila.jpg` |
| Gabriela de la Vega | `gabriela-de-la-vega.jpg` |
| Nicolás Pelloli | `nicolas-pelloli.jpg` |
| Vanina O. Maldonado | `vanina-o-maldonado.jpg` |
| Daiana Freiberger | `daiana-freiberger.jpg` |
| Fernando Santana | `fernando-santana.jpg` |
| Analía L. Escalante | `analia-l-escalante.jpg` |
| Vladimir Espeche | `vladimir-espeche.jpg` |
| María Monte de Oca | `maria-monte-de-oca.jpg` |
| Valter Tavarone | `valter-tavarone.jpg` |

## CONCEJALES-TOLH/ (Tolhuin)

| Nombre | Archivo esperado |
|---|---|
| Matías Rodríguez | `matias-rodriguez.jpg` |
| Rosana Taberna | `rosana-taberna.jpg` |
| Jeannette Alderete | `jeannette-alderete.jpg` |
| Marcelo M. Muñoz | `marcelo-m-munoz.jpg` |
| María F. Auat | `maria-f-auat.jpg` |

## SENADORES/

| Nombre | Archivo esperado |
|---|---|
| Agustín Coto | `agustin-coto.jpg` |
| Belén Monte de Oca | `belen-monte-de-oca.jpg` |
| Cristina López | `cristina-lopez.jpg` |

## DIPUTADOS/

| Nombre | Archivo esperado |
|---|---|
| Andrea Freites | `andrea-freites.jpg` |
| Jorge Araujo | `jorge-araujo.jpg` |
| Santiago Pauli | `santiago-pauli.jpg` |
| Víctor Hugo Ponce | `victor-hugo-ponce.jpg` |
| Viviana Salamanca | `viviana-salamanca.jpg` |

---

Si preferís usar `.png` en vez de `.jpg` para algún funcionario, actualizá el
`photoUrl` correspondiente en `src/data/sampleData.ts`.
