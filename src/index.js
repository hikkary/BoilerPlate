import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from './config/store'
import theme from './config/theme'
import Routes from './config/routes'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
