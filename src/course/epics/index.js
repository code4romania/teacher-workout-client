import { combineEpics } from 'redux-observable'

import { get } from 'course/epics/get'

export const course = combineEpics(get)
