import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://jwgtbwtvnvrfyyxelkdd.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3Z3Rid3R2bnZyZnl5eGVsa2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMTk1NjMsImV4cCI6MjA2ODU5NTU2M30.qpCThtHcCIB5jr4RLlIua1n30MPcUwoQDQBlXnIZfbQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
