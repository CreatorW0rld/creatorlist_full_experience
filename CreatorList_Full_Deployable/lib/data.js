import { supabase } from './supabase';

export async function getCampaigns() {
  let { data, error } = await supabase.from('campaigns').select('*');
  if (error) throw error;
  return data;
}