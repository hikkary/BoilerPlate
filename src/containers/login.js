import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import LoginForm from '../components/loginForm'

import allTheActions from '../actions'

import 'react-vis/dist/style.css'

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`

const LeftDiv = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color.white};
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  width: 100%;
`
const RightDiv = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color.white};
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  width: 100%;
`
const BookSeparator = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.color.black};
  opacity: 0.2;
  box-shadow: 1px 2px 31px 7px;
  width: 1px;
`

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainContainer>
          <LeftDiv>
            <p>LOGO</p>
          </LeftDiv>
          <BookSeparator />
          <RightDiv>
            <LoginForm />
            {/* creer un component input pour contenir tout sa*/}
          </RightDiv>
        </MainContainer>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    search: state.search.search
  }
}
const mapDispatchToProps = dispatch => ({
  actions: {
    search: bindActionCreators(allTheActions.search, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
