import {combineReducers} from '@reduxjs/toolkit'

import {get} from './get'

export const course = combineReducers({
    get: get.reducer
})
