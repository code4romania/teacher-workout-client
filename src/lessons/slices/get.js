import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  attempt: undefined,
  success: [],
  failure: undefined,
}

const attempt = (state, { payload }) => ({ ...state, attempt: payload })

const success = (state, { payload }) => ({ ...state, success: payload })

const failure = (state, { payload }) => ({ ...state, failure: payload })

export const get = createSlice({
  initialState,
  name: 'getSlice',
  reducers: {
    attempt,
    success,
    failure,
  },
})

export const { actions } = get
