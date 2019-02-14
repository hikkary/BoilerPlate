import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import { Title } from '../components/texts'
import Counter from '../components/counter'
import ExerciceOne from '../components/exerciceOne'
import ExerciceTwo from '../components/exerciceTwo'
import ExerciceFour from '../components/exerciceFour'
import ExerciceFive from '../components/exerciceFive'
import ExerciceSix from '../components/exerciceSix'
import DragAndDrop from '../components/dragAndDrop'
import Layout from './layout'

import allTheActions from '../actions'
import { getRandomUser } from '../utils/getRandomUsers'

const CountersAndTitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
`
const CountersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`
const SpellsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
`

class HomePage extends Component {
  static propTypes = {
    actions: PropTypes.object,
    counter: PropTypes.object
  }

  componentDidMount() {
    getRandomUser().then(res => console.log(res))
  }

  render() {
    const { actions, counter } = this.props
    return (
      <Layout>
        <CountersAndTitleContainer>
          <Title>ExerciceOne</Title>
          <CountersContainer>
            <ExerciceOne
              counterNumber={counter.gryffindor}
              counterTitle="test Gryffondor"
              increment={() => actions.counter.incrementCounter('gryffindor')}
              decrement={() => actions.counter.decrementCounter('gryffindor')}
            />
          </CountersContainer>
        </CountersAndTitleContainer>
        <CountersAndTitleContainer>
          <Title>ExerciceTwo</Title>
          <ExerciceTwo numberElements={3} />
        </CountersAndTitleContainer>
        <CountersAndTitleContainer>
          <Title>ExerciceFour</Title>
          <ExerciceFour
            counterNumber={counter.gryffindor}
            counterTitle="test 4"
            increment={() => actions.counter.incrementCounter('gryffindor')}
            decrement={() => actions.counter.decrementCounter('gryffindor')}
          />
        </CountersAndTitleContainer>
        <CountersAndTitleContainer>
          <Title>ExerciceFive</Title>
          <ExerciceFive
            counterNumber={counter.slytherin}
            counterTitle="test 5"
            increment={() => actions.counter.incrementCounter('gryffindor')}
            decrement={() => actions.counter.decrementCounter('gryffindor')}
          />
        </CountersAndTitleContainer>
        <CountersAndTitleContainer>
          <Title>ExerciceSix</Title>
          <ExerciceSix data="Allo allo" />
        </CountersAndTitleContainer>
        <CountersAndTitleContainer>
          <CountersContainer>
            <Counter
              counterNumber={counter.gryffindor}
              counterTitle="Gryffindor"
              primaryColor="gryffindorPrimary"
              secondaryColor="gryffindorSecondary"
              increment={() => actions.counter.incrementCounter('gryffindor')}
              decrement={() => actions.counter.decrementCounter('gryffindor')}
            />
            <Counter
              counterNumber={counter.slytherin}
              counterTitle="Slytherin"
              primaryColor="slytherinPrimary"
              secondaryColor="slytherinSecondary"
              increment={() => actions.counter.incrementCounter('slytherin')}
              decrement={() => actions.counter.decrementCounter('slytherin')}
            />
            <Counter
              counterNumber={counter.ravenclaw}
              counterTitle="Ravenclaw"
              primaryColor="ravenclawPrimary"
              secondaryColor="ravenclawSecondary"
              increment={() => actions.counter.incrementCounter('ravenclaw')}
              decrement={() => actions.counter.decrementCounter('ravenclaw')}
            />
            <Counter
              counterNumber={counter.hufflepuff}
              counterTitle="Hufflepuff"
              primaryColor="hufflepuffPrimary"
              secondaryColor="hufflepuffSecondary"
              increment={() => actions.counter.incrementCounter('hufflepuff')}
              decrement={() => actions.counter.decrementCounter('hufflepuff')}
            />
          </CountersContainer>
        </CountersAndTitleContainer>
        <SpellsContainer>
          <Title>My Favorite Spells</Title>
          <DragAndDrop />
        </SpellsContainer>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    counter: bindActionCreators(allTheActions.counter, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
