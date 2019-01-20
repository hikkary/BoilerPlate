import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header'

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
      </React.Fragment>
    )
  }
}
