import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import HeadApp from '../../../src/components/HeadApp'
import Title from '../../../src/components/Title'
import BoxServer from '../../../src/components/BoxServer'
import BoxChat from '../../../src/components/BoxChat'
import BoxMembers from '../../../src/components/BoxMembers'
import appConfig from '../../../config.json'

export default function Chat() {
  const [name, setName] = useState('github')
  const [userName, setUserName] = useState('github')
  const { query } = useRouter()

  const url = 'https://api.github.com/users/' + query.username

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
    .then(function () {
      // always executed
    })

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
