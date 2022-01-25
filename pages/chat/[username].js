import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Chat() {
  const [name, setName] = useState('github')
  const { query } = useRouter()
  const url = 'https://api.github.com/users/' + query.username

  axios
    .get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
      },
    })
    .then(function (response) {
      setName(response.data.name)
    })
    .catch(function (error) {
      setName('github')
    })
    .then(function () {
      // always executed
    })

  return <div>Seja bem vindo {name}</div>
}
