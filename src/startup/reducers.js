import { combineReducers } from '@reduxjs/toolkit'

import { course } from 'course/slices'
import { layout } from 'layout/slices'

export const reducers = combineReducers({ layout, course })
