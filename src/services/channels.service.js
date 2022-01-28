import supabase from '../../utils/supabase-client'

export async function getChannels() {
  return supabase
    .from('channels')
    .select('*')
    .then(({ data }) => data)
}

export async function getChannel(channel_idv4) {
  return supabase
    .from('channels')
    .select('*')
    .eq('idv4', channel_idv4)
    .then(({ data }) => data)
}
