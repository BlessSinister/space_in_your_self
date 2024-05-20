import { configureStore, current } from '@reduxjs/toolkit'
import { dataSlice } from './dataSlice'
import { activeDestinSlice, destinationSlice } from './destinationSlice'
import { crewSlice } from './crewSlice'
import { techSlice } from './techSlice'

export const store = configureStore({
  reducer: {
    getData: dataSlice.reducer,
    currentPlanet: destinationSlice.reducer,
    currentCrew: crewSlice.reducer,
    currentTech: techSlice.reducer,
    activeDest: activeDestinSlice.reducer,
  },
  devTools: true,
})
