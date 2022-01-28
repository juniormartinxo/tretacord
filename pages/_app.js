import GlobalStyle from '../src/styles/global'
import { AuthProvider } from '../src/hooks/useAuth'

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}
