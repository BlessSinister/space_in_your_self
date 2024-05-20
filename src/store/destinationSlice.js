import { createSlice } from '@reduxjs/toolkit'

export const destinationSlice = createSlice({
  name: 'destination',
  initialState: [
    {
      name: 'Moon',
      images: {
        png: './assets/destination/image-moon.png',
        webp: './assets/destination/image-moon.webp',
      },
      description:
        'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,400 km',
      travel: '3 days',
    },
  ],
  reducers: {
    filterDestinaton: (state, action) => {
      return action.payload[0].filter((item) => {
        return item.name.toLowerCase() === action.payload[1]
      })
    },
  },
})

export const { filterDestinaton } = destinationSlice.actions

export const activeDestinSlice = createSlice({
  name: 'active',
  initialState: 'moon',
  reducers: {
    setActive: (state, action) => action.payload,
  },
})

export const { setActive } = activeDestinSlice.actions
