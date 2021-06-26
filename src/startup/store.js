import { createEpicMiddleware } from 'redux-observable'
import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import {composeWithDevTools} from 'redux-devtools-extension'

import { epics } from 'startup/epics'
import { reducers } from 'startup/reducers'

const middleware = createEpicMiddleware()

export const make = () => {
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware)))

  middleware.run(epics)

  return store
}
