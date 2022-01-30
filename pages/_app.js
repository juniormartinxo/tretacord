import GlobalStyle from '../src/styles/global'
import { Providers } from '../src/hooks/providers'
import { ThemeProvider } from 'styled-components'
import { NextUIProvider } from '@nextui-org/react'
import { theme } from '../src/styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Providers>
        <ThemeProvider theme={theme}>
          <NextUIProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </NextUIProvider>
        </ThemeProvider>
      </Providers>
    </>
  )
}
