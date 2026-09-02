import type { Metadata } from "next";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Política de Privacidad | Impacto Diario",
  description:
    "Política de privacidad de Impactodiario Live, la app de transmisión en vivo de Impacto Diario.",
};

export default function PoliticaDePrivacidad() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto w-full max-w-[800px] flex-1 px-4 py-10">
        <h1 className="mb-2 text-3xl font-bold">Política de Privacidad</h1>
        <p className="mb-8 text-sm text-gray-500">
          Última actualización: septiembre de 2026
        </p>

        <div className="flex flex-col gap-6 text-gray-800">
          <section>
            <h2 className="mb-2 text-xl font-semibold">¿Qué es Impactodiario Live?</h2>
            <p>
              Impactodiario Live es una aplicación de uso interno de Impacto Diario
              (impactodiario.com.ar), un medio de noticias de la provincia de
              Tierra del Fuego, Argentina. La usan exclusivamente los operadores
              del propio medio para transmitir coberturas periodísticas en vivo
              directamente a la Página de Facebook de Impacto Diario. No está
              publicada en tiendas de aplicaciones ni disponible para el público
              en general.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">
              Qué datos de Facebook utiliza y para qué
            </h2>
            <p className="mb-2">
              La app se conecta con la API de Facebook (Meta Graph API) usando
              exclusivamente permisos sobre la Página de Facebook de Impacto
              Diario, administrada por el propio medio:
            </p>
            <ul className="ml-6 list-disc">
              <li>
                <strong>pages_show_list:</strong> para identificar la Página de
                Facebook de Impacto Diario sobre la que se va a transmitir.
              </li>
              <li>
                <strong>pages_read_engagement:</strong> para leer información
                básica de la Página necesaria antes de publicar.
              </li>
              <li>
                <strong>pages_manage_posts</strong> y{" "}
                <strong>publish_video:</strong> para crear la transmisión en
                vivo en la Página, con la visibilidad (borrador o público) que
                el operador elige en la app antes de salir al aire.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Qué NO hacemos con estos datos</h2>
            <ul className="ml-6 list-disc">
              <li>No accedemos a datos de otras Páginas ni de otros usuarios de Facebook.</li>
              <li>No compartimos, vendemos ni cedemos esta información a terceros.</li>
              <li>No usamos estos datos con fines publicitarios.</li>
              <li>
                La app no tiene sistema de cuentas de usuario propio: la usan
                directamente los operadores del medio, autenticados con su
                propia cuenta de Facebook.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Retención de datos</h2>
            <p>
              La app no guarda una base de datos propia con información de
              Facebook. La comunicación con la API de Meta ocurre en el momento
              de transmitir, únicamente para crear la transmisión en vivo en la
              Página.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Contacto</h2>
            <p>
              Ante cualquier consulta sobre esta política de privacidad, podés
              escribirnos a{" "}
              <a
                href="mailto:saldiviajulito@gmail.com"
                className="text-blue-600 underline"
              >
                saldiviajulito@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
