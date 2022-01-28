import { createClient } from '@supabase/supabase-js'

//console.log(process.env.SUPABASE_URL)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

//console.log('supabaseUrl', __supabaseUrl)

const supabase = createClient(supabaseUrl, supabaseAnonKey)

//export default supabase

export function addMessage() {
  console.log('addMessage')
}
