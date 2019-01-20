import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Panel from '../components/panel'
import { Title } from '../components/texts'

const PanelContainer = styled.div`
  display: flex;
`

const SeveralLineTitle = styled(Title)`
  padding: 10px;
  font-size: calc(24px + 1vw);
`

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <PanelContainer>
          <Link to="/house/gryffindor">
            <Panel>
              <SeveralLineTitle color="white">MAISONS</SeveralLineTitle>
            </Panel>
          </Link>
          <Panel color="secondaryColor">
            <SeveralLineTitle color="white">SCORES</SeveralLineTitle>
          </Panel>
          <Panel color="tertiaryColor">
            <SeveralLineTitle color="white">OPTIONS</SeveralLineTitle>
          </Panel>
          <Panel color="white" />
        </PanelContainer>
      </React.Fragment>
    )
  }
}

export default HomePage
