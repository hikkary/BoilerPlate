import styled from 'styled-components'

const Title = styled.h2`
  font-size: 30px;
  color: ${props =>
    props.color ? props.theme.color[props.color] : props.theme.color.black};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`
const SubTitle = styled.h4`
  color: ${props =>
    props.color ? props.theme.color[props.color] : props.theme.color.green};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`
const CommonText = styled.span`
  color: ${props =>
    props.color ? props.theme.color[props.color] : props.theme.color.black};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`
const GreyCommonText = styled.span`
  color: ${props =>
    props.color ? props.theme.color[props.color] : props.theme.color.gray};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`

export { CommonText, GreyCommonText, Title, SubTitle }
