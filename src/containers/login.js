import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import allTheActions from '../actions'

const Header = styled.div`
  background-color: ${props => props.theme.color.black};
  height: 150px;
  padding: 20px;
  color: white;
`

class App extends Component {
  componentDidMount() {
    this.props.actions.search.displaySearch('ace')
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <p>Ceci est la page de login</p>
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
