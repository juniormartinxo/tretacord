import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import Title from '../../src/components/Title'
import MessagesList from '../../src/components/MessagesList'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useMessage } from '../hooks/useMessages'
import { useUser } from '../hooks/useUser'
import { useChannel } from '../hooks/useChannels'
import { addMessage } from '../services/messages.service'

import appConfig from '../../config.json'

function BoxChat() {
  const [message, setMessage] = useState('')
  const [rows, setRows] = useState(1)
  const { messages, setMessages } = useMessage()
  const { channel, setChannel } = useChannel()
  const { userName } = useUser()

  function handleMessages(message) {
    const msg = {
      idv4: uuidv4(),
      channel_idv4: channel.idv4,
      user: userName,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      text: message,
      situ: 'A',
    }

    addMessage(msg)

    setMessages([msg, ...messages])
    setMessage('')
    setRows(1)
  }

  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: {
          xs: '100%',
          sm: '100%',
          md: '50%',
          lg: '50%',
          xl: '70%',
        },
        backgroundColor: '#1c2335',
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          flexDirection: 'row',
          borderBottom: '1px solid #000000',
          width: '100%',
          padding: '15px',
          height: '5vh',
        }}
      >
        <Text
          styleSheet={{
            fontFamily: '"Teko", sans-serif',
            fontSize: '20px',
          }}
        >
          # | {channel.name}
        </Text>
        <Text
          styleSheet={{
            marginLeft: '10px',
            paddingLeft: '10px',
            borderLeft: '1px solid #362e44',
            fontSize: '12px',
          }}
        >
          {channel.description}
        </Text>
      </Box>

      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'end',
          flexDirection: 'column',
          width: '100%',
          padding: '15px',
          height: '95vh',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <MessagesList />
        </Box>

        <Box
          as="form"
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <TextField
            placeholder="Tretar em # | treta-dev"
            type="textarea"
            rows={rows}
            styleSheet={{
              width: '100%',
              border: '0',
              resize: 'none',
              borderRadius: '5px',
              padding: '1rem 3.5rem',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              color: appConfig.theme.colors.neutrals[200],
              backgroundClip: 'padding-box',
              display: 'block',
              appearance: 'none',
              overflow: 'hidden',
              display: 'flex',
              alignContent: 'center',
            }}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.shiftKey) {
                /*console.log(e.shiftKey)*/
              } else {
                if (e.key === 'Enter') {
                  console.log(message)

                  handleMessages(message)

                  e.target.value = ''

                  e.preventDefault()
                }
              }
            }}
            onInput={(e) => {
              setRows(e.target.value.split('\n').length)
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default BoxChat
