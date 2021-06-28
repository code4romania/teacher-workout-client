import { combineEpics } from 'redux-observable'

import { get } from 'theme/epics/get'

export const theme = combineEpics(get)
