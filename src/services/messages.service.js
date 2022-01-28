import supabase from '../utils/supabase-client'

export async function getMessages(channel_idv4) {
  return supabase
    .from('messages')
    .select('*')
    .eq('channel_idv4', channel_idv4)
    .eq('situ', 'A')
    .order('id', { ascending: false })
    .then(({ data }) => data)
}

export async function addMessage(message) {
  const { data, error } = await supabase.from('messages').insert([message])

  return { data, error }
}
