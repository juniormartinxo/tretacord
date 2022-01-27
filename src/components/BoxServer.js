import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import Title from '../../src/components/Title'
import { IconLogOut } from '../../src/components/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

import appConfig from '../../config.json'

function BoxServer({ userName }) {
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
            xs: '80px',
            sm: '80px',
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
            <img src="/favicon/favicon-32x32.png" alt="" />
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
            xs: '80px',
            sm: '80px',
            md: '90vh',
            lg: '90vh',
            xl: '90vh',
          },
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            padding: '10px 0',
          }}
        >
          <Text># duvidas</Text>
        </Box>
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            padding: '10px 0',
          }}
        >
          <Text># regras</Text>
        </Box>
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
            <Link href={'/'}>
              <a>
                <IconLogOut h={16} />
              </a>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BoxServer
