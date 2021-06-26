import { combineReducers } from '@reduxjs/toolkit'

import { header } from 'header/slices'
import { course } from 'course/slices'

export const reducers = combineReducers({ header, course })
