import {combineReducers} from '@reduxjs/toolkit'

import {get} from 'src/course/slices/get'

export const course = combineReducers({
    get: get.reducer
})
