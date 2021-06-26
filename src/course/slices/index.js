import { combineReducers } from '@reduxjs/toolkit'

import { get } from 'course/slices/get'

export const course = combineReducers({ get: get.reducer })
