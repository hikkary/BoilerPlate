import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { Title } from '../components/texts'
import { transform } from 'popmotion'

import Layout from './layout'

const { pipe, clamp, interpolate, blendColor } = transform

const Circle = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
})

const Square = posed.div({
  draggable: 'x',
  dragBounds: { left: '0%', right: '600%' }
})

const SquareTwo = posed.div({
  draggable: 'x',
  passive: {
    backgroundColor: [
      'x',
      pipe(
        interpolate([0, 200], [0, 1]),
        clamp(0, 1),
        blendColor('#000000', '#FFFF00')
      )
    ]
  }
})

const SquareThree = posed.div({
  transition: {
    keyframes: {
      values: [0, 100]
    }
  }
})

const SquareStyled = styled(Square)`
  height: 50px;
  width: 50px;
  background-color: blue;
`

const SquareStyledTwo = styled(SquareTwo)`
  height: 50px;
  width: 50px;
  background-color: blue;
`

const SquareStyledThree = styled(SquareThree)`
  height: 50px;
  width: 50px;
  background-color: blue;
`

const CircleStyled = styled(Circle)`
  height: 50px;
  width: 50px;
  background-color: red;
  border-radius: 30px;
`
const SpellContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default class App extends Component {
  state = {
    isVisible: 'visible',
    isActive: 'active'
  }

  render() {
    return (
      <Layout>
        <SpellContainer>
          <Title> Sortilège de Désillusion</Title>
          <CircleStyled
            onMouseLeave={() => this.setState({ isVisible: 'visible' })}
            onMouseEnter={() => this.setState({ isVisible: 'hidden' })}
            pose={this.state.isVisible}
          />
        </SpellContainer>
        <SpellContainer>
          <Title>Expelliamus</Title>
          <SquareStyled
            onClick={() => this.setState({ isActive: 'inactive' })}
            pose={this.state.isActive}
          />
        </SpellContainer>
        <SpellContainer>
          <Title>Lumus Maxima</Title>
          <SquareStyledTwo
            onClick={() => this.setState({ isActive: 'inactive' })}
            pose={this.state.isActive}
          />
        </SpellContainer>
        <SpellContainer>
          <Title>Arresto Momentum</Title>
          <SquareStyledThree
            onClick={() => this.setState({ isActive: 'inactive' })}
            pose={this.state.isActive}
          />
        </SpellContainer>
      </Layout>
    )
  }
}
