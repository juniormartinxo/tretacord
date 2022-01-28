import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getChannels, getChannel } from '../services/channels.service'

export const ChannelContext = React.createContext({})

export const ChannelProvider = (props) => {
  const [channels, setChannels] = useState([])
  const [channel, setChannel] = useState([])
  const router = useRouter()
  const { channel_id } = router.query

  async function fetchChannels() {
    await getChannels().then(setChannels)
  }

  async function fetchChannel(channel_id) {
    await getChannel(channel_id).then(setChannel)
  }

  useEffect(() => {
    if (channel_id !== undefined) {
      fetchChannel(channel_id)
    }

    fetchChannels()
  }, [channel_id])

  return (
    <ChannelContext.Provider
      value={{ channels, setChannels, channel, setChannel }}
    >
      {props.children}
    </ChannelContext.Provider>
  )
}

export const useChannel = () => React.useContext(ChannelContext)
