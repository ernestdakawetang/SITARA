// ============================================================
// KONFIGURASI SUPABASE
// Isi 2 nilai di bawah ini dengan punya Anda sendiri.
// Cara mendapatkannya: Supabase Dashboard -> Project Settings -> API
//   - SUPABASE_URL   = "Project URL"
//   - SUPABASE_ANON_KEY = "anon public" key
//
// CATATAN KEAMANAN:
// Anon Key ini MEMANG BOLEH terlihat publik / ter-upload ke GitHub.
// Ini bukan kunci rahasia — akses sesungguhnya dibatasi oleh
// Row Level Security (RLS) yang sudah diatur di supabase_schema.sql.
// JANGAN PERNAH taruh "service_role key" di file manapun di folder ini.
// ============================================================

const SUPABASE_URL = "https://kzvqrbgigvdsatfpmemu.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "sb_publishable_X-r7k0uRxI9Uol6yVRW8Pg_QKZC0xXM";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
