import { createSlice } from '@reduxjs/toolkit'

const initialState = { visible: false }

const toggle = state => ({ ...state, visible: !state.visible })

export const mobile = createSlice({
  initialState,
  name: 'mobile',
  reducers: { toggle },
})
export const { actions } = mobile
