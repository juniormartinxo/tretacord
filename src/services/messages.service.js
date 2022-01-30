import supabase from '../utils/supabase-client'

export async function getMessages(channelIdv4) {
  return supabase
    .from('messages')
    .select('*')
    .eq('channel_idv4', channelIdv4)
    .eq('situ', 'A')
    .order('id', { ascending: false })
    .then(({ data }) => data)
}

export async function addMessage(message) {
  const { data, error } = await supabase.from('messages').insert([message])

  return { data, error }
}

export async function deleteMessage(messageIdv4) {
  const { data, error } = await supabase
    .from('messages')
    .update({ situ: 'B' })
    .eq('idv4', messageIdv4)

  return { data, error }
}
