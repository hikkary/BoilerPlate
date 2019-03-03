import React from 'react'
import styled from 'styled-components'
import { withTranslation } from 'react-i18next'
import { withRouter } from 'react-router'
import Proptypes from 'prop-types'

import StyledLink from '../styledLink'
import { TextMenu } from '../texts'

const HeaderContainer = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color.tertiaryColor};
  display: flex;
  height: 50px;
`
const LeftMenuContainer = styled.div`
  display: flex;
  flex: 7;
  justify-content: center;
`
const RightMenuContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

class Header extends React.Component {
  static propTypes = {
    history: Proptypes.object
  }
  disconnect = () => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    const { t } = this.props
    return (
      <HeaderContainer>
        <LeftMenuContainer>
          <StyledLink to="/home">
            <TextMenu>{t('menu.home')}</TextMenu>
          </StyledLink>
          <StyledLink to="/house/gryffindor">
            <TextMenu>{t('menu.houses')}</TextMenu>
          </StyledLink>
          <StyledLink to="/ranking">
            <TextMenu>{t('menu.ranking')}</TextMenu>
          </StyledLink>
          <StyledLink to="/library">
            <TextMenu>{t('menu.library')}</TextMenu>
          </StyledLink>
          <StyledLink to="/spells">
            <TextMenu>{t('menu.spells')}</TextMenu>
          </StyledLink>
          <StyledLink to="/options">
            <TextMenu>{t('menu.options')}</TextMenu>
          </StyledLink>
        </LeftMenuContainer>
        <RightMenuContainer>
          <TextMenu onClick={this.disconnect}>{t('menu.disconnect')}</TextMenu>
        </RightMenuContainer>
      </HeaderContainer>
    )
  }
}

const ConnectedHeader = withRouter(Header)

export default withTranslation()(ConnectedHeader)
