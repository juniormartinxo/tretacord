import supabase from '../../utils/supabase-client'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export function useMessages() {
  const { query } = useRouter()
  const { channel } = query
  const { username } = query
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await supabase
        .from('channels')
        .select('*')
        .where({ channel: channel })
        .orderBy('id', 'desc')
        .limit(10)
        .then((data) => {
          setMessages(data)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    fetchData()
  }, [channel])

  return messages
}
