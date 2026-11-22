
const SUPABASE_URL = "tdouuylposokoicuuitk";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_w18-HFI7_T6erXzlWBLAAg_yZPWOAv-";

window.bmtSupabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

console.log("BMT Supabase initialized");
