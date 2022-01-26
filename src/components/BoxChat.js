import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import Title from '../../src/components/Title'

import appConfig from '../../config.json'

function BoxChat() {
  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: '70%',
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
          # | treta-dev
        </Text>
        <Text
          styleSheet={{
            marginLeft: '10px',
            paddingLeft: '10px',
            borderLeft: '1px solid #362e44',
            fontSize: '12px',
          }}
        >
          Este é o canal oficial da treta
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
            styleSheet={{
              width: '100%',
              border: '0',
              resize: 'none',
              borderRadius: '5px',
              padding: '1rem 3.5rem',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              color: appConfig.theme.colors.neutrals[200],
              lineHeight: '1.5',
              transition:
                'border var(--timing-short) ease-in,background-color var(--timing-short) ease-in',
              backgroundClip: 'padding-box',
              display: 'block',
              appearance: 'none',
              overflow: 'hidden',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default BoxChat
