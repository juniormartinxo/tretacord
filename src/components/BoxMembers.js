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
        width: '15%',
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
      ></Box>
    </Box>
  )
}

export default BoxMembers
