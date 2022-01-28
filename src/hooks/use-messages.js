import React, { useEffect, useState } from 'react'

export const MessageContext = React.createContext({})

export const MessageProvider = (props) => {
  const [user, setUser] = useState({
    name: '',
  })

  useEffect(() => {
    const userStorage = localStorage.getItem('user')
    if (userStorage) {
      setUser(JSON.parse(userStorage))
    } else {
      setUser({
        name: '',
      })
    }
  }, [])

  return (
    <MessageContext.Provider value={{ user, setUser }}>
      {props.children}
    </MessageContext.Provider>
  )
}

export const useMessage = () => React.useContext(MessageContext)
