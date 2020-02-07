import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.nav`

`

const List = styled.ul`
  display: flex;
`

const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`

const Link = styled(NavLink)`
  padding: 4px;
  color: #fff;
  font-size: 2rem;
  &:hover {
    text-decoration: underline;
  }
` 

const Nav = () => {
  return (
  <Container>
    <List>
      <Item>
        <Link to="/">Home</Link>
      </Item>
      <Item>
        <Link to="/about">About</Link>
      </Item>
    </List>
  </Container>
  )
}

export default Nav
