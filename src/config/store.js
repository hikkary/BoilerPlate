import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
// used for async func use on redux
// import thunk from 'redux-thunk'

import reducers from '../reducers'

const store = createStore(reducers, applyMiddleware(logger))

export default store
