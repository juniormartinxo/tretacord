import supabase from '../utils/supabase-client'

export async function getMessages(channel_idv4) {
  return supabase
    .from('messages')
    .select('*')
    .eq('channel_idv4', channel_idv4)
    .then(({ data }) => data)
}
