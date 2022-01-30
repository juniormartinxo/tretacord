import { useState } from 'react'
import { Box, Text, TextField, Image } from '@skynexui/components'
import { Button } from '@nextui-org/react'
import { useMessage } from '../hooks/useMessages'
import Viewer from '../../src/components/Viewer'
import { useChannel } from '../hooks/useChannels'
import { getMessages, deleteMessage } from '../services/messages.service'
import {
  ArrowReply,
  CommentEdit,
  Delete,
} from '@styled-icons/fluentui-system-regular'

import { marked } from 'marked'

import DOMPurify from 'dompurify'
/*
import Prism from 'prismjs'
import 'highlight.js/styles/default.css'
*/

/**
 * Importa os estilos do highlight.js
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
  const sizeIcons = 24

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

    console.log('date', date)

    return date
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
                    top: '-65px',
                    right: '-12px',
                  }}
                  data-id={message.idv4}
                >
                  <Button.Group
                    size="sm"
                    css={{
                      borderRadius: '3px 3px 0 0', //
                      border: '2px solid #131825',
                      background: '#131825', // colors.pink800
                    }}
                  >
                    <Button
                      title="Responder"
                      css={{
                        borderRadius: '3px',
                        background: '#232939', // colors.pink800
                        color: '#c7d8ff',
                        height: '24', // space[12]
                        boxShadow: 'md', // shadows.md
                        '&:hover': {
                          background: '#ff1453',
                        },
                        '&:active': {
                          background: '#ff1453333',
                        },
                        '&:focus': {
                          borderColor: '#ff1453',
                        },
                      }}
                    >
                      <ArrowReply size={sizeIcons} />
                    </Button>
                    <Button
                      onClick={() => {
                        fetchDeleteMessage(message.idv4, channel.id)
                      }}
                      title="Excluir"
                      css={{
                        borderRadius: '3px',
                        background: '#232939', // colors.pink800
                        color: '#c7d8ff',
                        height: '24', // space[12]
                        boxShadow: 'md', // shadows.md
                        '&:hover': {
                          background: '#ff1453',
                        },
                        '&:active': {
                          background: '#ff1453',
                        },
                        '&:focus': {
                          borderColor: '#ff1453',
                        },
                      }}
                    >
                      <Delete size={sizeIcons} />
                    </Button>
                    <Button
                      onClick={() => {
                        handleEditable(!editable)
                      }}
                      title="Editar"
                      css={{
                        borderRadius: '3px',
                        background: '#232939', // colors.pink800
                        color: '#c7d8ff',
                        height: '24', // space[12]
                        boxShadow: 'md', // shadows.md
                        '&:hover': {
                          background: '#ff1453',
                        },
                        '&:active': {
                          background: '#ff1453',
                        },
                        '&:focus': {
                          borderColor: '#ff1453',
                        },
                      }}
                    >
                      <CommentEdit size={sizeIcons} />
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
