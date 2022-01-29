import supabase from '../utils/supabase-client'

export async function getChannels() {
  return supabase
    .from('channels')
    .select('*')
    .then(({ data }) => data)
}

export async function getChannel(channelIdv4) {
  return supabase
    .from('channels')
    .select('*')
    .eq('idv4', channelIdv4)
    .then(({ data }) => data[0])
}
