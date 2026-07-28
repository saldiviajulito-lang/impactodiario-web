import { createClient, SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/**
 * Cliente de Supabase (lazy: se crea recién en el primer uso, así el sitio
 * no se rompe si SUPABASE_URL / SUPABASE_ANON_KEY todavía no están
 * configuradas — el error solo aparece cuando algo intenta usarlo).
 */
export function getSupabaseClient(): SupabaseClient {
  if (client) {
    return client;
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Faltan las variables de entorno SUPABASE_URL y/o SUPABASE_ANON_KEY en .env.local",
    );
  }

  client = createClient(supabaseUrl, supabaseAnonKey);
  return client;
}
