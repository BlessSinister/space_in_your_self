import { createSlice } from '@reduxjs/toolkit'

export const crewSlice = createSlice({
  name: 'crew',
  initialState: [
    {
      name: 'Douglas Hurley',
      images: {
        png: './assets/crew/image-douglas-hurley.png',
        webp: './assets/crew/image-douglas-hurley.webp',
      },
      role: 'Commander',
      bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    },
  ],
  reducers: {
    filterCrew: (state, action) => {
      console.log(action)
      return action.payload[0].filter((item) => {
        return item.role.toLowerCase() === action.payload[1]
      })
    },
  },
})

export const { filterCrew } = crewSlice.actions
