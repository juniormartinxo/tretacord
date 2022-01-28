import GlobalStyle from '../src/styles/global'
import { Providers } from '../src/hooks/providers'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Providers>
        <GlobalStyle />
        <Component {...pageProps} />
      </Providers>
    </>
  )
}
