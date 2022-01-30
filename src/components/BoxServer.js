import { Box, Text, Image } from '@skynexui/components'
import Title from '../../src/components/Title'
import IconLogOut from './IconLogOut'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import appConfig from '../../config.json'

function BoxServer({ userName, channels }) {
  const router = useRouter()

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
          md: '25%',
          lg: '25%',
          xl: '15%',
        },
        backgroundColor: '#131825',
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
          height: {
            xs: 'auto',
            sm: 'auto',
            md: '5vh',
            lg: '5vh',
            xl: '5vh',
          },
        }}
      >
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
          <Box>
            <Title tag="h3">{appConfig.title}</Title>
          </Box>
        </Box>
      </Box>

      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'start',
          flexDirection: 'column',
          width: '100%',
          padding: '15px',
          height: {
            xs: 'auto',
            sm: 'auto',
            md: '90vh',
            lg: '90vh',
            xl: '90vh',
          },
        }}
      >
        <Title tag={'h3'}>CANAIS</Title>
        {channels.map((channel) => {
          if (channel.idv4 === router.query.channel_id) {
            return (
              <Link
                href={`/chat/${channel.idv4}/${userName}`}
                key={channel.idv4}
                passHref
              >
                <a># {channel.name}</a>
              </Link>
            )
          } else {
            return (
              <Link
                href={`/chat/${channel.idv4}/${userName}`}
                key={channel.idv4}
                passHref
              >
                <a># {channel.name}</a>
              </Link>
            )
          }
        })}
      </Box>

      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          flexDirection: 'row',
          width: '100%',
          padding: '15px',
          height: {
            xs: '80px',
            sm: '80px',
            md: '5vh',
            lg: '5vh',
            xl: '5vh',
          },
          borderTop: '1px solid #000000',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <Box>
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  width: '32px',
                  marginRight: '10px',
                }}
                src={`https://github.com/${userName}.png`}
              />
            </Box>
            <Box>
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
          </Box>
          <Box>
            <Link href={'/'} passHref>
              <a>
                <Box
                  styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    flexDirection: 'row',
                    width: '100%',
                  }}
                >
                  <Box
                    styleSheet={{
                      marginRight: '5px',
                    }}
                  >
                    Sair
                  </Box>
                  <Box>
                    <IconLogOut h={16} />
                  </Box>
                </Box>
              </a>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BoxServer
