import React from 'react'

import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  min-height: 64px;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  padding: 2px;
  font-size: 2rem;
  margin-right: 8px;
`

const Button = styled.button`
  padding: 2px;
  font-size: 2rem;
  cursor: pointer;
`

const Search = () => {
  return (
    <Container>
      <Input type="text" />
      <Button>Search</Button>
    </Container>
  )
}

export default Search
