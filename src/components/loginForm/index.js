import React from 'react'
import styled from 'styled-components'

import { GreyCommonText, SubTitle, Title } from '../texts'
import Input from '../input'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export default class LoginForm extends React.Component {
  render() {
    return (
      <Form>
        <Title>Connexion</Title>
        <Input placeholder="Email" />
        <Input placeholder="Mot De passe" />
      </Form>
    )
  }
}
