import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Item {
  id: string
  title: string
  description:string
  urlyoutube:string
}

const itemSlice = createSlice({
  name: 'items',
  initialState: [] as Item[],
  reducers: {
    addItem: {
      reducer: (state, action: PayloadAction<Item>) => {
        state.push(action.payload)
      },
      prepare: (title:string,description:string,urlyoutube) => {
        const id = nanoid()
        return { payload: { id, title,description,urlyoutube } }
      },
    },
  },
})



export default itemSlice.reducer;
export const {addItem}=itemSlice.actions