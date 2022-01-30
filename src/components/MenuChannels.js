import { MenuChannelsNav } from './MenuChannelsStyled'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function MenuChannels({ channels }) {
  const router = useRouter()
  const { channelId, username } = router.query

  return (
    <MenuChannelsNav>
      {channels.map((channel) => {
        const urlLink = `/chat/${channel.idv4}/${username}`
        return (
          <Link href={urlLink} key={channel.idv4} passHref>
            <a className={channelId === channel.idv4 ? 'active' : ''}>
              # {channel.name}
            </a>
          </Link>
        )
      })}
    </MenuChannelsNav>
  )
}
