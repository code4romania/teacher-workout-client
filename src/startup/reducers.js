import { combineReducers } from '@reduxjs/toolkit'

import { header } from 'header/slices'
import { course } from 'course/slices'
import { theme } from 'theme/slices'

export const reducers = combineReducers({ header, course, theme })
