import { combineReducers } from '@reduxjs/toolkit'

import { header } from 'layout/header/slices'

export const layout = combineReducers({ header })
