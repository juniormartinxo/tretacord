import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Fira Sans", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /* App fit Height */
  html,
  body,
  #__next {
    line-height: 1;
    min-height: 100vh;
    display: flex;
    flex: 1;
  }
  #__next {
    flex: 1;
  }
  #__next > * {
    flex: 1;
  }
  /* ./App fit Height */
`

export default GlobalStyle
