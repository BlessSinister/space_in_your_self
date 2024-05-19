import { configureStore } from '@reduxjs/toolkit'
import { dataSlice } from './dataSlice'
import { destinationSlice } from './destinationSlice'

export const store = configureStore({
  reducer: {
    getData: dataSlice.reducer,
    currentPlanet: destinationSlice.reducer,
  },
  devTools: true,
})
