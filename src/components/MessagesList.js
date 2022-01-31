import { useState } from 'react'
import { Box, Text, TextField, Image } from '@skynexui/components'
import { Button } from '@nextui-org/react'
import { useMessage } from '../hooks/useMessages'
import Viewer from '../../src/components/Viewer'
import { useChannel } from '../hooks/useChannels'
import {
  getMessages,
  deleteMessage,
  listenerMessages,
} from '../services/messages.service'
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
  const { messages, setMessages, updateMessages, setUpdateMessages } =
    useMessage()
  const [editable, setEditable] = useState(false)
  const [display, setDisplay] = useState({ idv4: '', display: 'none' })
  const { channel } = useChannel()
  const sizeIcons = 24

  function handleEditable(situation) {
    setEditable(situation)
  }

  async function fetchDeleteMessage(messageIdv4, channelIdv4) {
    await deleteMessage(messageIdv4).then(({ data, error }) => {
      if (error === null) {
        setUpdateMessages(!updateMessages)
      } else {
        console.log('error ao deletar', error)
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

    // console.log('date', date)

    return date
  }

  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: 'auto',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px',
      }}
    >
      {messages.map((message) => {
        const text = message.text.startsWith(':sticker:')
          ? `<img src="${message.text.replace(
              ':sticker: ',
              '',
            )}" width="200px" alt="" />`
          : message.text

        const markdown = marked.parse(text)
        const sanitized = DOMPurify.sanitize(markdown)
        /*
        const html = Prism.highlight(
          markdown,
          Prism.languages.javascript,
          'javascript',
        )
        */

        return (
          <Text
            key={message.id}
            tag="li"
            styleSheet={{
              borderRadius: '5px',
              padding: '8px',
              marginBottom: '12px',
              marginRight: '5px',
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
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
                <Text tag="strong">{message.user}</Text>
                <Text
                  styleSheet={{
                    fontSize: '10px',
                    marginLeft: '8px',
                    color: appConfig.theme.colors.neutrals[300],
                  }}
                  tag="span"
                >
                  {handleDate(message.date)} - {message.time}
                </Text>
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
                    top: '-32px',
                    right: '0',
                  }}
                  data-id={message.idv4}
                >
                  <Button.Group
                    size="sm"
                    css={{
                      borderRadius: '0 0 0 3px', //
                      background: '#131825', // colors.pink800
                    }}
                  >
                    <Button
                      title="Responder"
                      css={{
                        borderRadius: '0  0 0 25px',
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
                        borderRadius: '0',
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
                      title="Editar"
                      onClick={() => {
                        handleEditable(!editable)
                      }}
                      css={{
                        borderRadius: '0  0 25px 0',
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
          </Text>
        )
      })}
    </Box>
  )
}

export default MessagesList
