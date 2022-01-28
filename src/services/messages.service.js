import supabase from '../utils/supabase-client'

export async function getMessages() {
  return supabase
    .from('messages')
    .select('*')
    .then(({ data }) => data)
}
