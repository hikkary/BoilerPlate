import reducer from '../themes'

import { themeLight, themeDark } from '../../config/themes'
import { changeTheme } from '../../actions/themes'

const initialState = {
  currentTheme: themeLight
}

it('sets initial state', () => {
  const expected = { ...initialState }
  const actual = reducer(undefined, {})
  expect(actual).toEqual(expected)
})

it('set the light Theme  ', () => {
  const expected = {
    ...initialState,
    currentTheme: {
      ...themeLight
    }
  }

  const actual = reducer(undefined, changeTheme(themeLight))
  expect(actual).toEqual(expected)
})

// TODO: set the darklight

// MATCH SNAPSHOT

it('sets initial state Snapshot', () => {
  expect(reducer(undefined, {})).toMatchSnapshot()
  // reducer prend en premier argument un state, en second argument une action
})

// TODO: Snapshot quand on set themeDark et themeLight
