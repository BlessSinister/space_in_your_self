import { createSlice } from '@reduxjs/toolkit'

export const techSlice = createSlice({
  name: 'tech',
  initialState: [
    {
      name: 'Launch vehicle',
      images: {
        portrait: 'https://i.ibb.co/8N73PYP/image-launch-vehicle-portrait.jpg',
        landscape:
          'https://i.ibb.co/xj7tqgd/image-launch-vehicle-landscape.jpg',
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
  ],
  reducers: {
    filterTech: (state, action) => {
      return action.payload[0].filter((item) => {
        return item.name.toLowerCase() === action.payload[1]
      })
    },
  },
})

export const { filterTech } = techSlice.actions

export const activeTechSlice = createSlice({
  name: 'active',
  initialState: 'launch vehicle',
  reducers: {
    setActiveTech: (state, action) => action.payload,
  },
})

export const { setActiveTech } = activeTechSlice.actions
