import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getMessages } from '../services/messages.service'

export const MessageContext = React.createContext({})

export const MessageProvider = (props) => {
  const [messages, setMessages] = useState([])
  const router = useRouter()
  const { channelId } = router.query

  async function fetchMessages(channelIdv4) {
    await getMessages(channelIdv4).then(setMessages)
  }

  useEffect(() => {
    if (channelId !== undefined) {
      fetchMessages(channelId)

      console.log('messages', messages)
    }
  }, [channelId])

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {props.children}
    </MessageContext.Provider>
  )
}

export const useMessage = () => React.useContext(MessageContext)
