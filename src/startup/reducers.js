import { combineReducers } from '@reduxjs/toolkit'

import { course } from 'course/slices'
import { header } from 'layout/header/slices'

export const reducers = combineReducers({ header, course })
