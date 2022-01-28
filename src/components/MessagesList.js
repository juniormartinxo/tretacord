import { Box, Button, Text, TextField, Image } from '@skynexui/components'

/*
import { marked } from 'marked'
import DOMPurify from 'dompurify'
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

function MessagesList({ messages, userName }) {
  function handleDate(date) {
    const today = new Date()
    const yesterday = new Date(today.getTime() - 86400000)

    if (date === today.toLocaleDateString()) {
      return 'Hoje'
    } else if (date.toLocaleDateString() === yesterday.toLocaleDateString()) {
      return 'Ontem'
    }

    return date.toLocaleDateString()
  }

  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: 'scroll',
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
        /*
        const markdown = marked.parse(message.text)
        //const sanitized = DOMPurify.sanitize(markdown)
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
              padding: '6px',
              marginBottom: '12px',
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
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
                    src={`https://github.com/${userName}.png`}
                  />
                </Box>
                <Box>
                  <Text tag="strong">{message.userSend}</Text>
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
                  fontSize: '16px',
                  marginLeft: '8px',
                  color: appConfig.theme.colors.neutrals[300],
                  padding: '15px',
                }}
                tag="span"
              >
                <Box
                  dangerouslySetInnerHTML={{
                    __html: message.text,
                  }}
                />
              </Text>
            </Box>
          </Text>
        )
      })}
    </Box>
  )
}

export default MessagesList
