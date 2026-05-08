import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  name: string;
  email: string;
  band_name: string;
  message: string;
}

export async function submitContactForm(data: ContactSubmission) {
  const { error } = await supabase.from('contact_submissions').insert([data]);
  if (error) throw error;
}
