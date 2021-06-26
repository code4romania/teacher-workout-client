import { combineEpics } from 'redux-observable'

import { course } from 'course/epics'

export const epics = combineEpics(course)
