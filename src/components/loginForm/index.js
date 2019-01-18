import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { SubTitle, Title } from '../texts'
import Input from '../input'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const LoginSubtitle = styled(SubTitle)`
  padding: 5px;
  cursor: pointer;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color.primaryColor};
`

export default class LoginForm extends React.Component {
  render() {
    return (
      <Form>
        <Title>Connexion</Title>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Mot De passe" />
        <StyledLink to="/home">
          <LoginSubtitle uppercase>Se Connecter</LoginSubtitle>
        </StyledLink>
        <LoginSubtitle color="gray">Vous êtes nouveau ?</LoginSubtitle>
        <LoginSubtitle color="gray">
          Vous avez oublier votre mot de passe ?
        </LoginSubtitle>
      </Form>
    )
  }
}
