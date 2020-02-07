import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'

const Container = styled.header`
  background-color: #2c2e37;
  min-height: 64px;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = () => {
  return (
    <Container>
      <Nav />
    </Container>
  )
}

export default Header
