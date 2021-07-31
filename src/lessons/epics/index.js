import { combineEpics } from 'redux-observable'

import { get } from 'lessons/epics/get'

export const lessons = combineEpics(get)
