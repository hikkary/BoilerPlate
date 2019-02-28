import { withRouter } from 'react-router-dom'
import Proptypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { isEmail, isPassword } from '../../utils/regexs'
import { SubTitle, Title, CommonText } from '../texts'
import Input from '../input'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  text-align: center;
`

const LoginSubtitle = styled(SubTitle)`
  cursor: pointer;
  padding: 5px;
`
const StyledSubmit = styled(Input)`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.color.primaryColor};
`

class LoginForm extends React.Component {
  static propTypes = {
    history: Proptypes.object
  }
  state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: ''
  }

  clearErrorMessages = () => {
    this.setState({ emailError: '', passwordError: '' })
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state)
    })
  }

  checkInputs = () => {
    if (!isEmail(this.state.email)) {
      this.setState({ emailError: 'Veuillez entrer un email correct' })
      return false
    }
    if (!isPassword(this.state.password)) {
      this.setState({
        passwordError: 'Votre mot de passe doit faire au moins 8 characteres'
      })
      return false
    }
    return true
  }

  handleSubmit = event => {
    event.preventDefault()
    const { history } = this.props
    this.clearErrorMessages()

    if (!this.checkInputs()) {
      console.log('err')
      return
    }
    // mettre axios ici
    // console.log(this.state.email, this.state.password)
    localStorage.setItem('token', 'validToken')
    history.push('/home')
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Title>Connexion</Title>
        <Input
          onChange={this.inputHandler}
          type="email"
          placeholder="Email"
          name="email"
        />
        <CommonText>{this.state.emailError}</CommonText>
        <Input
          onChange={this.inputHandler}
          type="password"
          placeholder="Mot De passe"
          name="password"
        />
        <CommonText>{this.state.passwordError}</CommonText>
        <StyledSubmit type="submit" value="SE CONNECTER" />
        <LoginSubtitle color="gray">Vous êtes nouveau ?</LoginSubtitle>
      </Form>
    )
  }
}

const ConnectedLoginForm = withRouter(LoginForm)

export default ConnectedLoginForm
