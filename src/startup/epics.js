import { lessons } from 'lessons/epics'
import { combineEpics } from 'redux-observable'

export const epics = combineEpics(lessons)
