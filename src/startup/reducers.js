import { combineReducers } from '@reduxjs/toolkit'

import { settings } from 'settings/slices/settings'

export const reducers = combineReducers({ settings: settings.reducer })
