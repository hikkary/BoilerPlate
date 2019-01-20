import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
// used for async func use on redux
// import thunk from 'redux-thunk'

export const history = createBrowserHistory()

export const store = createStore(applyMiddleware(logger))
