import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getChannels, getChannel } from '../services/channels.service'

export const LoadingContext = React.createContext({})

export const LoadingProvider = (props) => {
  const [channels, setChannels] = useState([])
  const [channel, setChannel] = useState([])
  const router = useRouter()
  const { channelId } = router.query

  useEffect(() => {}, [router])

  return (
    <LoadingContext.Provider
      value={{ channels, setChannels, channel, setChannel }}
    >
      {props.children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => React.useContext(LoadingContext)
