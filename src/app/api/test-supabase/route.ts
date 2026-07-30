import { NextResponse } from "next/server";

import { getSupabaseClient } from "@/lib/supabase";

/**
 * Ruta de diagnóstico temporal: hace la misma consulta exacta que
 * getPublicacionesByFuncionario("damian-loffler") y devuelve el resultado
 * crudo como JSON, junto con si las variables de entorno están definidas.
 * No expone valores de las variables, solo si existen o no.
 */
export async function GET() {
  const env = {
    SUPABASE_URL_definida: Boolean(process.env.SUPABASE_URL),
    SUPABASE_ANON_KEY_definida: Boolean(process.env.SUPABASE_ANON_KEY),
  };

  try {
    const supabase = getSupabaseClient();

    const { data, error } = await supabase
      .from("publicaciones")
      .select("*")
      .eq("funcionario_slug", "damian-loffler")
      .eq("activo", true)
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json(
        { ok: false, env, supabaseError: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      env,
      count: (data ?? []).length,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        env,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
