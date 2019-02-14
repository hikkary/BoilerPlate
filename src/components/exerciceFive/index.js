import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default class Counter extends React.Component {
  static propTypes = {
    counterNumber: PropTypes.number.isRequired,
    counterTitle: PropTypes.string.isRequired,
    decrement: PropTypes.func,
    disabled: PropTypes.bool,
    increment: PropTypes.func
  }

  state = {
    isLoading: false
  }

  loading = () => {
    this.setState({
      isLoading: !this.state.isLoading
    })
  }

  render() {
    const {
      counterNumber,
      counterTitle,
      decrement,
      disabled,
      increment
    } = this.props

    if (disabled) {
      return null
    }

    return (
      <div className="counterContainer">
        <div>
          <span className="commonText">{counterTitle}</span>
        </div>
        <div className="counterNumberContainer">
          <span className="commonText">{counterNumber}</span>
        </div>
        <div>
          <button className="styledButton decrementButton" onClick={decrement}>
            <span className="commonText">-</span>
          </button>
          <button className="styledButton incrementButton" onClick={increment}>
            <span className="commonText">+</span>
          </button>
          <button className="loadButton" onClick={this.loading}>
            <span className="commonText">load</span>
          </button>
        </div>
      </div>
    )
  }
}

Counter.defaultProps = {
  counterNumber: 0
}
