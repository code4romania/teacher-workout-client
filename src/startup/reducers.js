import { layout } from 'layout/slices'
import { lessons } from 'lessons/slices'
import { combineReducers } from '@reduxjs/toolkit'

export const reducers = combineReducers({ layout, lessons })
