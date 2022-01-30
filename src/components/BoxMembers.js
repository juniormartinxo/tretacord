import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import Title from '../../src/components/Title'
import { Link } from '@nextui-org/react'

import appConfig from '../../config.json'

const users = [
  'juniormartinxo',
  'vanessametonini',
  'omariosouto',
  'juunegreiros',
  'peas',
  'moisesrmartins',
  'bessax',
  'peixebabel',
  'liviagabos',
  'designernatan',
  'alura',
]

function BoxMembers() {
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
          alignItems: 'start',
          justifyContent: 'space-between',
          flexDirection: 'column',
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
          Treteiros
        </Text>
      </Box>

      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
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
            justifyContent: 'start',
            flexDirection: 'column',
            gap: '15px',
            width: '100%',
          }}
        >
          {users.map((user) => {
            return (
              <Box
                styleSheet={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  flexDirection: 'row',
                  width: '100%',
                }}
                key={user}
              >
                <Image
                  styleSheet={{
                    borderRadius: '50%',
                    width: '32px',
                  }}
                  src={`https://github.com/${user}.png`}
                />
                <Link
                  href={`https://github.com/${user}`}
                  target={'_blank'}
                  css={{
                    color: '#fff',
                    '&:hover': {
                      color: '#ff1453',
                    },
                  }}
                >
                  {user}
                </Link>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default BoxMembers
