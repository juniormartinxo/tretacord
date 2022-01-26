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
      <HeadApp title="TRETACORD"></HeadApp>
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          backgroundImage: 'url(/images/bg_chat.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '1rem',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: '100%',
            borderRadius: '5px',
            padding: '32px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: 'rgba(19, 24, 38, 0.95)',
            color: '#fff',
          }}
        >
          <p>Olá {name}</p>
        </Box>
      </Box>
    </>
  )
}
