import { get } from 'lessons/slices/get'
import { combineReducers } from '@reduxjs/toolkit'

export const lessons = combineReducers({ get: get.reducer })
