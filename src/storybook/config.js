import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import centered from '@storybook/addon-centered'
import '../../node_modules/react-vis/dist/style.css'

import theme from '../config/theme'

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)
addDecorator(ThemeDecorator)
addDecorator(centered)

function loadStories() {
  require('../components/input/story.js')
  require('../components/loginForm/story.js')
  require('../components/panel/story.js')
  require('../components/texts/story.js')
  require('../components/graphTest/story.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
