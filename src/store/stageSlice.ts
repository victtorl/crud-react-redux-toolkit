import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Definir el tipo de los items
interface Item {
  id: string;
  title: string;
  description: string;
  url: string;
}

// Estado inicial
const initialState: Item[] = [];

// Crear el slice de Redux
const stageSlice = createSlice({
  name: "itemstage",
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<Item>) => {
 
          // state.push({...action.payload})
        state[0]=action.payload
    },
  }
});

// Exportar acciones
export const { setItem } = stageSlice.actions;
export default stageSlice.reducer

