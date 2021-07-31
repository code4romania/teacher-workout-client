import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: '',
  input: '',
  errors: '',
}

const attempt = (state, { payload }) => ({ ...state, input: payload })

const success = (state, { payload }) => ({ ...state, data: payload })

const failure = (state, { payload }) => ({ ...state, errors: payload })

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
