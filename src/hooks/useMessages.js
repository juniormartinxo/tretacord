import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getMessages, deleteMessage } from '../services/messages.service'
import supabase from '../utils/supabase-client'

export const MessageContext = React.createContext({})

export const MessageProvider = (props) => {
  const [messages, setMessages] = useState([])
  const [updateMessages, setUpdateMessages] = useState(false)
  const router = useRouter()
  const { channelId } = router.query

  async function fetchMessages(channelIdv4) {
    await getMessages(channelIdv4).then(setMessages)
  }

  useEffect(() => {
    if (channelId !== undefined) {
      fetchMessages(channelId)
    }
  }, [router])

  useEffect(() => {
    function addNewMessage(newMessage) {
      setMessages((_messages) => {
        return [newMessage, ..._messages]
      })
    }

    function updateDeletedMessage(deletedMessage) {
      setMessages((_messages) => {
        return _messages.filter(
          (message) => message.idv4 !== deletedMessage.idv4,
        )
      })
    }

    const subscription = async function listenerMessages() {
      const exec = await supabase
        .from('messages')
        .on('*', (data) => {
          switch (data.eventType) {
            case 'INSERT':
              addNewMessage(data.new)
              break
            case 'UPDATE':
              updateDeletedMessage(data.new)
              break
            case 'DELETE':
              updateDeletedMessage(data.old)
              break
          }
        })
        .subscribe()
    }

    subscription()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <MessageContext.Provider
      value={{ messages, setMessages, updateMessages, setUpdateMessages }}
    >
      {props.children}
    </MessageContext.Provider>
  )
}

export const useMessage = () => React.useContext(MessageContext)
