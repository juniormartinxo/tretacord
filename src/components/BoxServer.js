import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import Title from '../../src/components/Title'

import appConfig from '../../config.json'

function BoxServer() {
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
          alignItems: 'center',
          justifyContent: 'start',
          flexDirection: 'row',
          borderBottom: '1px solid #000000',
          width: '100%',
          padding: '15px',
          height: '5vh',
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
          justifyContent: 'space-between',
          flexDirection: 'column',
          width: '100%',
          padding: '15px',
          height: '94vh',
        }}
      ></Box>
    </Box>
  )
}

export default BoxServer
