import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'getData',
  initialState: [],
  reducers: {
    getData: (state, action) => action.payload,
  },
})

export const { getData } = dataSlice.actions
