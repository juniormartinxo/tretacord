import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getChannels, getChannel } from '../services/channels.service'

export const ChannelContext = React.createContext({})

export const ChannelProvider = (props) => {
  const [channels, setChannels] = useState([])
  const [channel, setChannel] = useState([])
  const router = useRouter()
  const { channelId } = router.query

  async function fetchChannels() {
    await getChannels().then(setChannels)
  }

  async function fetchChannel(channelId) {
    await getChannel(channelId).then(setChannel)
  }

  useEffect(() => {
    if (channelId !== undefined) {
      fetchChannel(channelId)
    }

    fetchChannels()
  }, [channelId])

  return (
    <ChannelContext.Provider
      value={{ channels, setChannels, channel, setChannel }}
    >
      {props.children}
    </ChannelContext.Provider>
  )
}

export const useChannel = () => React.useContext(ChannelContext)
