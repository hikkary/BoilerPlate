import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router'
import centered from '@storybook/addon-centered'

import 'react-vis/dist/style.css'

import theme from '../config/theme'

const ThemeDecorator = story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
)

const MemoryDecorator = story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
)

addDecorator(MemoryDecorator)
addDecorator(ThemeDecorator)
addDecorator(centered)

function loadStories() {
  require('../components/input/story.js')
  require('../components/loginForm/story.js')
  require('../components/panel/story.js')
  require('../components/texts/story.js')
  require('../components/graphTest/story.js')
  require('../components/list/story.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
