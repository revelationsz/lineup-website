import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || ""

console.log("Supabase Service Key:", process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY);
console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

// Create a single supabase client for interacting with your database
export const  supabase = createClient(supabaseUrl, supabaseServiceKey)


