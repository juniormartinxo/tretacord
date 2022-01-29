import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import appConfig from '../config.json'
import { useState } from 'react'
import Title from '../src/components/Title'
import axios from 'axios'
import { useRouter } from 'next/router'
import HeadApp from '../src/components/HeadApp'

export default function Home() {
  const [userName, setUserName] = useState('github')
  const [name, setName] = useState('')
  const [userReal, setUserReal] = useState(false)
  const router = useRouter()

  const handleUserName = (username) => {
    const url = 'https://api.github.com/users/' + username

    axios
      .get(url)
      .then(function (response) {
        setUserName(response.data.login)
        setUserReal(true)
      })
      .catch(function (error, data) {
        if (error) {
          console.log(error.stack)
        }
        setUserName('github')
        setUserReal(false)
      })
      .then(function () {
        // always executed
      })
  }

  return (
    <>
      <HeadApp title={appConfig.title}></HeadApp>
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
            /* backgroundColor: appConfig.theme.colors.neutrals[700], */
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
                router.push(
                  '/chat/cdb9750b-5514-4ec1-8671-7bc3b855c11f/' + userName,
                )
              } else {
                console.log('Usuário falso!')
              }
            }}
          >
            <Title tag="h2">
              <Box
                styleSheet={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}
              >
                <Box>
                  <Image src={'/favicon/favicon-32x32.png'} />
                </Box>
                <Box
                  styleSheet={{
                    marginLeft: '10px',
                  }}
                >
                  <Text
                    styleSheet={{
                      fontFamily: '"Teko", sans-serif',
                      fontSize: '1.5rem',
                    }}
                  >
                    {appConfig.title}
                  </Text>
                </Box>
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
              placeholder="Digite seu usuário do GitHub"
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[300],
                mainColorLight: appConfig.theme.colors.primary[800],
                mainColorStrong: appConfig.theme.colors.primary[800],
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
