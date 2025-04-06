import { supabase } from './supabase';

export async function fetchNotificationsForUser(username) {
  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .eq('recipient', username);
  if (error) throw error;
  return data;
}