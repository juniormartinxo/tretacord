import styled, { css } from 'styled-components'

const ViewerStyled = styled.div`
  width: 100%;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
  `};

  *:first-child {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Teko', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #c7d8ff;
    overflow-wrap: anywhere;
    line-height: 1.5;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
  }

  pre {
    padding: 15px;
    background: #f3f3f387;
    border-radius: 2px;
    border: 1px solid #e7e7e7;
    margin: 0;
    white-space: pre-wrap;
  }
`

export default ViewerStyled
