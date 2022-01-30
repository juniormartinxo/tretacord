import { useState } from 'react'
import { Box, Text, TextField, Image } from '@skynexui/components'
import { Button } from '@nextui-org/react'
import { useMessage } from '../hooks/useMessages'
import Viewer from '../../src/components/Viewer'
import { useChannel } from '../hooks/useChannels'
import { getMessages, deleteMessage } from '../services/messages.service'

import { marked } from 'marked'

import DOMPurify from 'dompurify'
/*
import Prism from 'prismjs'
*/
/**
 * Importa os estilos do highlight.js
 */
/*
import 'highlight.js/styles/default.css'
*/

// Set options
// `highlight` example uses https://highlightjs.org
/*
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const hljs = require('highlight.js')
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
})
*/

import appConfig from '../../config.json'

function MessagesList() {
  const { messages, setMessages } = useMessage()
  const [editable, setEditable] = useState(false)
  const [display, setDisplay] = useState({ idv4: '', display: 'none' })
  const { channel } = useChannel()

  function handleEditable(situation) {
    setEditable(situation)
  }

  async function fetchDeleteMessage(messageIdv4, channelIdv4) {
    await deleteMessage(messageIdv4).then(({ data, error }) => {
      if (error !== null) {
        getMessages(channelIdv4).then(setMessages)
      } else {
        console.log(error)
      }
    })
    // await getMessages(channelIdv4).then(setMessages)
  }

  function handleDate(date) {
    const today = new Date()
    const yesterday = new Date(today.getTime() - 86400000)

    if (date === today.toLocaleDateString()) {
      return 'Hoje'
    } else if (date === yesterday.toLocaleDateString()) {
      return 'Ontem'
    }

    return date.toLocaleDateString()
  }

  return (
    <Box
      tag="ul"
      styleSheet={{
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '20px',
        height: '100%',
        overflow: 'none',
      }}
    >
      {messages.map((message) => {
        const markdown = marked.parse(message.text)
        const sanitized = DOMPurify.sanitize(markdown)
        /*
        const html = Prism.highlight(
          markdown,
          Prism.languages.javascript,
          'javascript',
        )
        */

        return (
          <Box
            key={message.id}
            styleSheet={{
              borderRadius: '5px',
              padding: '6px',
              marginBottom: '12px',
              transition: 'background-color 0.5s ease',
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
                transition: 'background-color 0.5s ease',
              },
            }}
            id={message.idv4}
            onMouseEnter={(elem) =>
              setDisplay({ idv4: message.idv4, display: 'block' })
            }
            onMouseLeave={(elem) =>
              setDisplay({ idv4: message.idv4, display: 'none' })
            }
          >
            <Box
              styleSheet={{
                marginBottom: '8px',
              }}
            >
              <Box
                styleSheet={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  width: '100%',
                }}
              >
                <Box>
                  <Image
                    styleSheet={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      display: 'inline-block',
                      marginRight: '8px',
                    }}
                    src={`https://github.com/${message.user}.png`}
                  />
                </Box>
                <Box
                  styleSheet={{
                    fontSize: '14rem',
                  }}
                >
                  <Text tag="strong">{message.user}</Text>
                </Box>
                <Box
                  styleSheet={{
                    marginLeft: '15px',
                  }}
                >
                  <Text
                    styleSheet={{
                      fontSize: '12px',
                      color: appConfig.theme.colors.neutrals[400],
                    }}
                  >
                    {handleDate(message.date)} - {message.time}
                  </Text>
                </Box>
              </Box>
              <Text
                styleSheet={{
                  fontSize: '14px',
                  marginLeft: '8px',
                  color: appConfig.theme.colors.neutrals[300],
                  padding: '8px 15px',
                  position: 'relative',
                }}
                tag="span"
              >
                <Box
                  styleSheet={{
                    display:
                      message.idv4 === display.idv4
                        ? `${display.display}`
                        : 'none',
                    position: 'absolute',
                    top: '-50px',
                    right: '0',
                  }}
                  data-id={message.idv4}
                >
                  <Button.Group size="sm" color={'error'}>
                    <Button>One</Button>
                    <Button
                      onClick={() => {
                        fetchDeleteMessage(message.idv4, channel.id)
                      }}
                    >
                      Excluir
                    </Button>
                    <Button
                      onClick={() => {
                        handleEditable(!editable)
                      }}
                    >
                      Editar
                    </Button>
                  </Button.Group>
                </Box>
                <Viewer mkdText={sanitized} editable={editable} />
              </Text>
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default MessagesList
