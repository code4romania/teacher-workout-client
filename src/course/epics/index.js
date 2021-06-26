import {combineEpics} from 'redux-observable'

import {get} from 'src/course/epics/get'

export const course = combineEpics(
    get
)
