import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import HeadApp from '../../src/components/HeadApp'
import Title from '../../src/components/Title'
import appConfig from '../../config.json'

export default function Chat() {
  const [name, setName] = useState('github')
  const [userName, setUserName] = useState('github')
  const { query } = useRouter()
  const url = 'https://api.github.com/users/' + query.username

  axios
    .get(url, {
      headers: {
        'User-Agent': 'Awesome-Octocat-App',
      },
    })
    .then(function (response) {
      setName(response.data.name)
      setUserName(response.data.login)
    })
    .catch(function (error) {
      setName('github')
      setUserName('github')
    })
    .then(function () {
      // always executed
    })

  return (
    <>
      <HeadApp title="TRETACORD :: Chat"></HeadApp>
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
          padding: '15px',
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
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'space-between',
              flexDirection: 'column',
              padding: '15px',
              width: '20%',
            }}
          >
            <Box>
              <Title tag="h3">Tretacord</Title>
            </Box>
          </Box>

          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'row',
              borderRadius: '5px',
              padding: '15px',
              textAlign: 'justify',
              width: '60%',
            }}
          >
            <Box
              styleSheet={{
                fontFamily: '"Teko", sans-serif',
                fontSize: '20px',
              }}
            >
              <Text
                styleSheet={{
                  fontFamily: '"Teko", sans-serif',
                  fontSize: '20px',
                }}
              >
                # | treta-dev
              </Text>
              <Text
                styleSheet={{
                  fontFamily: '"Fira Sans", sans-serif;',
                  fontSize: 'inherit',
                  marginLeft: '10px',
                  paddingLeft: '10px',
                  borderLeft: '1px solid #362e44',
                  fontSize: '12px',
                }}
              >
                Este é o canal oficial da treta
              </Text>
            </Box>
          </Box>
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'space-between',
              flexDirection: 'column',
              padding: '15px',
              width: '20%',
              textAlign: 'justify',
            }}
          >
            <Text
              styleSheet={{
                fontFamily: '"Teko", sans-serif',
                fontSize: '20px',
              }}
            >
              Participantes
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}
