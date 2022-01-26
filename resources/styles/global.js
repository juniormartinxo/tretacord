import { createGlobalStyle } from 'styled-components'
import appConfig from '../../config.json'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Fira Sans', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Teko', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #C7D8FF;
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
