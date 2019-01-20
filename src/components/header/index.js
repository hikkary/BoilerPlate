import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  height: 50px;
  background-color: red;
`

export default class Header extends React.Component {
  render() {
    return <HeaderContainer />
  }
}
