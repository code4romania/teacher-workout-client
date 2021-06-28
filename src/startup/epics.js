import { combineEpics } from 'redux-observable'

import { course } from 'course/epics'
import { theme } from 'theme/epics'

export const epics = combineEpics(course, theme)
