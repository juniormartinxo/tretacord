import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export const UserContext = React.createContext({})

export const UserProvider = (props) => {
  const [name, setName] = useState('github')
  const [userName, setUserName] = useState('github')
  const router = useRouter()
  const { username } = router.query

  const url = 'https://api.github.com/users/' + username

  useEffect(() => {
    if (username !== undefined) {
      axios
        .get(url)
        .then(function (response) {
          setName(response.data.name)
          setUserName(response.data.login)
        })
        .catch(function (error, data) {
          if (error) {
            console.log(error)
          }
          setName('github')
          setUserName('github')
        })
    }
  }, [router])

  return (
    <UserContext.Provider value={{ userName, setUserName, name, setName }}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUser = () => React.useContext(UserContext)
