import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://htcwftmjxqbjbheufppn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0Y3dmdG1qeHFiamJoZXVmcHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyODk2ODcsImV4cCI6MjAwNTg2NTY4N30.NwaxtYm8_fNgVSr8n9xCtNIJ4nyoLML6FjTq2YufbTA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
