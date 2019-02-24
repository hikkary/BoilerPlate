import React from 'react'
import MockAdapter from 'axios-mock-adapter'

import { shallow, mount } from 'enzyme'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'

import ExerciceSeven from '../houseCharacters'
import { themeLight } from '../../config/themes'
import 'jest-styled-components'

const mockData = { results: [{ name: 'harry Potter' }] }

const mock = new MockAdapter(axios)
mock
  .onGet('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
  .reply(200, mockData)

let mockingMatch = {
  params: {
    houseName: 'gryffindor'
  }
}

class ThemeWrapper extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themeLight}>
        <MemoryRouter>{this.props.children}</MemoryRouter>
      </ThemeProvider>
    )
  }
}

it('render properly', () => {
  const component = shallow(
    <ThemeWrapper>
      <ExerciceSeven match={mockingMatch} />
    </ThemeWrapper>
  )

  expect(component).toMatchSnapshot()
  component.unmount()
})

// it('should have one element', () => {
//   const component = shallow(
//     <ThemeWrapper>
//       <ExerciceSeven match={mockingMatch} />
//     </ThemeWrapper>
//   ).setState({ characters: mockData.results })
//   // .update()
//   // component
//   // component.update()
//   console.log(component.state())

//   const p = component.fuind('p')
//   console.log(p.length)
//   console.log(component.find('[className="characterName"]').html())
//   // expect(component).toMatchSnapshot()
// })
