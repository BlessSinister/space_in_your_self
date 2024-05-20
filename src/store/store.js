import { configureStore } from '@reduxjs/toolkit'
import { dataSlice } from './dataSlice'
import { destinationSlice } from './destinationSlice'
import { crewSlice } from './crewSlice'

export const store = configureStore({
  reducer: {
    getData: dataSlice.reducer,
    currentPlanet: destinationSlice.reducer,
    currentCrew: crewSlice.reducer,
  },
  devTools: true,
})
