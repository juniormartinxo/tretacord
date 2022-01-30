import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import Title from '../../src/components/Title'

import appConfig from '../../config.json'

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
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                width: '32px',
                marginRight: '10px',
              }}
              src={`https://github.com/juniormartinxo.png`}
            />
            <Text variant="body4">juniormartinxo</Text>
          </Box>
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                width: '32px',
                marginRight: '10px',
              }}
              src={`https://github.com/vanessametonini.png`}
            />
            <Text variant="body4">vanessametonini</Text>
          </Box>
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                width: '32px',
                marginRight: '10px',
              }}
              src={`https://github.com/omariosouto.png`}
            />
            <Text variant="body4">omariosouto</Text>
          </Box>
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                width: '32px',
                marginRight: '10px',
              }}
              src={`https://github.com/juunegreiros.png`}
            />
            <Text variant="body4">juunegreiros</Text>
          </Box>
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                width: '32px',
                marginRight: '10px',
              }}
              src={`https://github.com/peas.png`}
            />
            <Text variant="body4">peas</Text>
          </Box>
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                width: '32px',
                marginRight: '10px',
              }}
              src={`https://github.com/bessax.png`}
            />
            <Text variant="body4">bessax</Text>
          </Box>
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                width: '32px',
                marginRight: '10px',
              }}
              src={`https://github.com/peixebabel.png`}
            />
            <Text variant="body4">peixebabel</Text>
          </Box>
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                width: '32px',
                marginRight: '10px',
              }}
              src={`https://github.com/liviagabos.png`}
            />
            <Text variant="body4">liviagabos</Text>
          </Box>
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                width: '32px',
                marginRight: '10px',
              }}
              src={`https://github.com/designernatan.png`}
            />
            <Text variant="body4">designernatan</Text>
          </Box>
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                width: '32px',
                marginRight: '10px',
              }}
              src={`https://github.com/alura.png`}
            />
            <Text variant="body4">alura</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BoxMembers
