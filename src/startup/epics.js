import { combineEpics } from 'redux-observable'

import { course } from 'src/course/epics'

export const epics = combineEpics(
    course
)
