import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getMessages } from '../services/messages.service'

export const MessageContext = React.createContext({})

export const MessageProvider = (props) => {
  const [messages, setMessages] = useState([])
  const router = useRouter()
  const { channel_id } = router.query

  async function fetchMessages(channel_idv4) {
    await getMessages(channel_idv4).then(setMessages)
  }

  useEffect(() => {
    if (channel_id !== undefined) {
      fetchMessages(channel_id)
    }
  }, [channel_id])

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {props.children}
    </MessageContext.Provider>
  )
}

export const useMessage = () => React.useContext(MessageContext)
