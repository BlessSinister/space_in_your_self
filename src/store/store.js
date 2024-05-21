import { configureStore } from '@reduxjs/toolkit'
import { dataSlice } from './dataSlice'
import { activeDestinSlice, destinationSlice } from './destinationSlice'
import { activeCrewSlice, crewSlice } from './crewSlice'
import { activeTechSlice, techSlice } from './techSlice'

export const store = configureStore({
  reducer: {
    getData: dataSlice.reducer,
    currentPlanet: destinationSlice.reducer,
    currentCrew: crewSlice.reducer,
    currentTech: techSlice.reducer,
    activeDest: activeDestinSlice.reducer,
    activeCrew: activeCrewSlice.reducer,
    activeTech: activeTechSlice.reducer,
  },
  devTools: true,
})
