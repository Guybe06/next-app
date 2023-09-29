import dotenv from 'dotenv';
dotenv.config();
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = "https://ubktihuoudpiwacyllfz.supabase.co" || '';
const supabaseKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVia3RpaHVvdWRwaXdhY3lsbGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5ODI2NzUsImV4cCI6MjAxMTU1ODY3NX0.z1CxRiG8cr-kH85UValzOloGFpftsHqZ4J_ue7q76_8" || '';

if (!supabaseUrl) {
  throw new Error('Impossible de joindre la base de données.');
}

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export { supabase };