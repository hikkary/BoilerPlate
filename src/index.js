import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Login from './containers/login'
import HomePage from './containers/homePage'
import HouseCharacters from './containers/houseCharacters'

import { store } from './config/store'
import theme from './config/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={HomePage} />
          <Route path="/house/:houseName" component={HouseCharacters} />
        </Switch>
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
