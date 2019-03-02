import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Login from '../containers/login'
import HomePage from '../containers/homePage'
import HouseCharacters from '../containers/houseCharacters'
import Ranking from '../containers/ranking'
import Options from '../containers/options'
import Spells from '../containers/spells'
import PrivateRoute from '../utils/privateRoute'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/house/:houseName" component={HouseCharacters} />
          <PrivateRoute path="/ranking" component={Ranking} />
          <PrivateRoute path="/spells" component={Spells} />
          <PrivateRoute path="/options" component={Options} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}
