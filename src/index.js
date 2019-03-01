import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from './config/store'
import Routes from './config/routes'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import './config/translations'
import i18next from 'i18next'

class App extends React.Component {
  state = {
    connectedTheme: store.getState()
  }

  componentDidMount() {
    store.subscribe(() => this.setState({ connectedTheme: store.getState() }))
    this.langageSelector()
    this.forceUpdate()
  }

  langageSelector = () => {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', i18next.language)
    } else {
      const currentLanguage = localStorage.getItem('language')
      i18next.changeLanguage(currentLanguage)
    }
  }

  render() {
    const { connectedTheme } = this.state
    return (
      <ThemeProvider theme={connectedTheme.themes.currentTheme}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
