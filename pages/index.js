import Head from 'next/head'
import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import appConfig from '../config.json'
import { useState } from 'react'
import Title from '../src/components/Title'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Home() {
  const [userName, setUserName] = useState('github')
  const [userReal, setUserReal] = useState(false)
  const router = useRouter()

  const handleUserName = (e) => {
    const url = 'https://api.github.com/users/' + e

    axios
      .get(url, {
        headers: {
          'User-Agent': 'Awesome-Octocat-App',
        },
      })
      .then(function (response) {
        //console.log(response.data)
        setUserName(response.data.login)
        setUserReal(true)
      })
      .catch(function (error) {
        //console.log(error)
        setUserName('github')
        setUserReal(false)
      })
      .then(function () {
        // always executed
      })
  }

  return (
    <>
      <Head>
        <title>TRETACORD</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        ></link>
      </Head>
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[400],
          backgroundImage:
            'url(https://media1.giphy.com/media/d2YWbtt6gIhaZfxK/giphy.gif?cid=ecf05e476tp51d5prpwah796oy0jdtwedtp5o7kk83qgiry2&rid=giphy.gif&ct=g)',
          backgroundSize: 'cover',
          backgroundBlendMode: 'luminosity',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%',
            maxWidth: '700px',
            borderRadius: '5px',
            padding: '32px',
            margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            /*backgroundColor: appConfig.theme.colors.neutrals[700],*/
            backgroundColor: 'rgba(19, 24, 38, 0.85)',
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', sm: '50%' },
              textAlign: 'center',
              marginBottom: '32px',
            }}
            onSubmit={(e) => {
              e.preventDefault()

              if (userReal) {
                router.push('/chat/' + userName)
              } else {
                console.log('Usuário falso!')
              }
            }}
          >
            <Title tag="h2">
              <Box
                styleSheet={{
                  display: 'flex',
                }}
              >
                <img src="/favicon/favicon-32x32.png" alt="" />
                {appConfig.title}
              </Box>
            </Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: '32px',
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.slogan}
            </Text>

            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
              onChange={(e) => handleUserName(e.target.value)}
              placeholder="Digite seu usuário"
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[300],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: 'rgba(14, 17, 22, 0.5)',
              border: '1px solid',
              borderColor: appConfig.theme.colors.primary[300],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
              boxShadow: '19px 13px 20px -12px rgba(0,0,0,0.1)',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${userName}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '5px 10px',
                borderRadius: '5px',
              }}
            >
              {userName}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  )
}
