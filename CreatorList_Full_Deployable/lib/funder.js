import { supabase } from './supabase';

export async function getFunderROI(username) {
  const { data, error } = await supabase
    .from('capital_claims')
    .select('*')
    .eq('backer', username);
  if (error) throw error;
  return data;
}