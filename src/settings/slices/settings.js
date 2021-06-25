import { createSlice } from '@reduxjs/toolkit'

const state = () => ({
  attempt: undefined,
  value: undefined,
  error: undefined,
})

const attempt = state => ({ ...state, attempt: {} })

const success = (state, action) => ({ ...state, value: action.payload })

const failure = (state, action) => ({ ...state, error: action.payload })

export const settings = createSlice({
  name: 'settings',
  initialState: state(),
  reducers: {
    attempt,
    success,
    failure,
  },
})

export const { actions } = settings
