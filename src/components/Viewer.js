import marked from 'marked'

function Viewer({messages, userName}) {
  return <Box
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
    styleSheet={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }}
  >
    <MessagesList messages={messages} userName={userName} />
  </Box>

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
      rows={rows}
      styleSheet={{
        width: '100%',
        border: '0',
        resize: 'none',
        borderRadius: '5px',
        padding: '1rem 3.5rem',
        backgroundColor: appConfig.theme.colors.neutrals[800],
        color: appConfig.theme.colors.neutrals[200],
        backgroundClip: 'padding-box',
        display: 'block',
        appearance: 'none',
        overflow: 'hidden',
        display: 'flex',
        alignContent: 'center',
      }}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === 'Enter' && e.shiftKey) {
          /*console.log(e.shiftKey)*/
        } else {
          if (e.key === 'Enter') {
            console.log(message)

            handleMessages(message)

            e.target.value = ''

            e.preventDefault()
          }
        }
      }}
      onInput={(e) => {
        setRows(e.target.value.split('\n').length)
      }}
    />
  </Box>
</Box>
</Box>
}

export default Viewer
