import { createEpicMiddleware } from 'redux-observable'
import { applyMiddleware, createStore } from '@reduxjs/toolkit'

import { epics } from 'startup/epics'
import { reducers } from 'startup/reducers'

const middleware = createEpicMiddleware()

export const make = () => {
  const store = createStore(reducers, applyMiddleware(middleware))

  middleware.run(epics)

  return store
}
