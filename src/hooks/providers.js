/**
 * https://github.com/scottjr632/react-provider-wrapper
 * https://github.com/HorusGoul/react-component-pack
 * https://tousu.in/?qa=180264/
 */

import { UserProvider } from './useUser'
import { MessageProvider } from './useMessages'
import { ChannelProvider } from './useChannels'

const providers = [
  {
    component: UserProvider,
  },
  {
    component: MessageProvider,
  },
  {
    component: ChannelProvider,
  },
]

export const Providers = ({ children }) => {
  return providers.reduceRight((child, provider) => {
    return <provider.component {...provider.props}>{child}</provider.component>
  }, children)
}
