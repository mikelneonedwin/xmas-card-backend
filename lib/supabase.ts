import { createClient } from "@supabase/supabase-js";
import type { Database } from "../database.types";
import { env } from "../env";

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
  env.SUPABASE_URL,
  env.SUPABASE_PUBLISHABLE_DEFAULT_KEY,
);
