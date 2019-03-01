import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import allTheActions from '../actions'
import Layout from './layout'
import { themeLight, themeDark } from '../config/themes'

import { Title } from '../components/texts'
import { Button } from 'glamorous'
import i18next from 'i18next'

class Ranking extends Component {
  static propTypes = {
    actions: PropTypes.object
  }

  changeLanguage = language => {
    i18next.changeLanguage(language)
    localStorage.setItem('language', language)
  }

  render() {
    const { actions } = this.props
    return (
      <Layout>
        <Title>Choisissez un Theme</Title>
        <Button onClick={() => actions.themes.changeTheme(themeDark)}>
          Mode Nuit
        </Button>
        <Button onClick={() => actions.themes.changeTheme(themeLight)}>
          Mode Jour
        </Button>
        <Title>Choisissez un Language</Title>
        <Button onClick={() => this.changeLanguage('fr')}>Français</Button>
        <Button onClick={() => this.changeLanguage('en')}>Anglais</Button>
      </Layout>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    themes: bindActionCreators(allTheActions.themes, dispatch)
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Ranking)
