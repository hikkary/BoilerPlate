import React, { Component } from 'react'
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
          <Panel>
            <SeveralLineTitle color="white">ÉCOLES</SeveralLineTitle>
          </Panel>
          <Panel color="greenLight">
            <SeveralLineTitle color="white">ASSOCIATION</SeveralLineTitle>
          </Panel>
          <Panel color="greenLighter">
            <SeveralLineTitle color="white">MOSQUÉES</SeveralLineTitle>
          </Panel>
          <Panel color="white" />
        </PanelContainer>
      </React.Fragment>
    )
  }
}

export default HomePage
