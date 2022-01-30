import styled, { css } from 'styled-components'

const MenuChannelsNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 15px;

  a{
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    width: 100%;
    padding: 15px;
    color: #c7d8ff;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
    border: 1px dotted transparent;
    margin-bottom: 2px;

    &:hover, &.active { {
      color: #ff1453;
      border: 1px dotted #ff1453;
      transition: all 0.2s ease;
    }
  }
`

export { MenuChannelsNav }
