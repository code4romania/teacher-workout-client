import { combineReducers } from '@reduxjs/toolkit'

import { get } from 'theme/slices/get'

export const theme = combineReducers({ get: get.reducer })
