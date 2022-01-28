import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import supabase from '../../../utils/supabase-client'

import HeadApp from '../../../src/components/HeadApp'
import Title from '../../../src/components/Title'
import BoxServer from '../../../src/components/BoxServer'
import BoxChat from '../../../src/components/BoxChat'
import BoxMembers from '../../../src/components/BoxMembers'
import appConfig from '../../../config.json'
import { getMessages } from '../../../src/services/messages.service'
import { getChannel } from '../../../src/services/channels.service'

export default function Chat() {
  const [name, setName] = useState('github')
  const [userName, setUserName] = useState('github')
  const [messages, setMessages] = useState([])
  const [channel, setChannel] = useState([])
  const { query } = useRouter()
  const { channel_id, username } = query

  const url = 'https://api.github.com/users/' + username

  if (username !== undefined) {
    axios
      .get(url)
      .then(function (response) {
        setName(response.data.name)
        setUserName(response.data.login)
      })
      .catch(function (error) {
        setName('github')
        setUserName('github')
      })
  }

  async function fetchMessages() {
    await getMessages().then(setMessages)
  }

  async function fetchChannel(channel_idv4) {
    await getChannel(channel_idv4).then(setChannel)
  }

  useEffect(() => {
    channel_id && fetchChannel(channel_id)
  }, [channel_id])

  useEffect(() => {
    console.log('channel-2', channel)
  }, [channel_id])

  return (
    <>
      <HeadApp title={appConfig.title + ` | #treta-dev`}></HeadApp>
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          backgroundImage: 'url(/images/bg_chat.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          width: '100%',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(19, 24, 38, 0.90)',
            color: '#C7D8FF',
            width: '100%',
            height: '100vh',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
            },
          }}
        >
          <BoxServer userName={userName} />
          <BoxChat userName={userName} />
          <BoxMembers />
        </Box>
      </Box>
    </>
  )
}
