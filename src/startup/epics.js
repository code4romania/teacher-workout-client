import { combineEpics } from 'redux-observable'

import { fetch } from 'settings/epics/fetch'

export const epics = combineEpics(fetch)
