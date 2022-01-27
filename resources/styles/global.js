import { createGlobalStyle } from 'styled-components'
import appConfig from '../../config.json'

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Fira Sans', sans-serif;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
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

  a{
    color: #3a3d45;
    text-decoration: none;
  }

  a:hover{
    color: #BF3636;
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
