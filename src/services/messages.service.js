import supabase from '../utils/supabase-client'

/**
 * Responsável por buscar as mensagens do canal
 *
 * @param {string} channelIdv4
 * @returns
 */
export async function getMessages(channelIdv4) {
  return supabase
    .from('messages')
    .select('*')
    .eq('channel_idv4', channelIdv4)
    .eq('situ', 'A')
    .order('id', { ascending: false })
    .then(({ data }) => data)
}

/**
 * Responsável por inserir uma nova mensagem no banco de dados
 *
 * @param {string} message
 * @returns
 */
export async function addMessage(message) {
  const { data, error } = await supabase.from('messages').insert([message])

  return { data, error }
}

/**
 * Responsável por deletar uma mensagem
 *
 * @param {string}  messageIdv4
 * @returns
 */
export async function deleteMessage(messageIdv4) {
  const { data, error } = await supabase
    .from('messages')
    .update({ situ: 'B' })
    .eq('idv4', messageIdv4)

  return { data, error }
}

/**
 *
 * @param {*} addNewMessage
 * @param {*} updateDeletedMessage
 * @returns
 */
/*
export async function listenerMessages(setMessages) {
  const exec = await supabase
    .from('messages')
    .on('*', (data) => {
      console.log('data', data)
      switch (data.eventType) {
        case 'INSERT':
          addNewMessage(data.new, setMessages)
          break
        case 'UPDATE':
          updateDeletedMessage(data.new, setMessages)
          break
        case 'DELETE':
          updateDeletedMessage(data.old, setMessages)
          break
      }
    })
    .subscribe()

  return exec
}

function addNewMessage(newMessage, setMessages) {
  setMessages((_messages) => {
    return [newMessage, ..._messages]
  })
}

function updateDeletedMessage(deletedMessage, setMessages) {
  setMessages((_messages) => {
    return _messages.filter((message) => message.idv4 !== deletedMessage.idv4)
  })
}
*/
