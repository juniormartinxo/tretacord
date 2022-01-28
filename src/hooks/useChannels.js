import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getChannels } from '../services/channels.service'

export const ChannelContext = React.createContext({})

export const ChannelProvider = (props) => {
  const [channels, setChannels] = useState([])
  const router = useRouter()
  const { channel_id } = router.query

  async function fetchChannels() {
    await getChannels().then(setChannels)
  }

  useEffect(() => {
    if (channel_id !== undefined) {
      fetchChannels(channel_id)
    }
  }, [channel_id])

  return (
    <ChannelContext.Provider value={{ channels, setChannels }}>
      {props.children}
    </ChannelContext.Provider>
  )
}

export const useChannel = () => React.useContext(ChannelContext)
