/**
 * https://github.com/scottjr632/react-provider-wrapper
 * https://github.com/HorusGoul/react-component-pack
 * https://tousu.in/?qa=180264/
 */

import { UserProvider, userName, setUserName, name, setName } from './useUser'
import { MessageProvider, messages, setMessages } from './useMessages'
import { ChannelProvider, channels, setChannels } from './useChannels'

const providers = [
  {
    component: UserProvider,
    props: { userName, setUserName, name, setName },
  },
  {
    component: MessageProvider,
    props: { messages, setMessages },
  },
  {
    component: ChannelProvider,
    props: { channels, setChannels },
  },
]

export const Providers = ({ children }) => {
  return providers.reduceRight((child, provider) => {
    return <provider.component {...provider.props} children={child} />
  }, children)
}
