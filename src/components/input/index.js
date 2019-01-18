import styled from 'styled-components'

const InputStyled = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px solid ${props => props.theme.color.primaryColor};
  margin: 0px 0px 15px 0px;
  padding: 10px;
  font-size: 20px;
`

export default InputStyled
