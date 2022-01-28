import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
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
        .catch(function (error) {
          setName('github')
          setUserName('github')
        })
    }
  }, [router])

  return (
    <AuthContext.Provider value={{ userName, setUserName, name, setName }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext)
