import { combineReducers } from '@reduxjs/toolkit'

import { mobile } from 'header/slices/mobile'

export const header = combineReducers({ mobile: mobile.reducer })
