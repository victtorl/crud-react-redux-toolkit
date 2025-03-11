import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";




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

        state.push(action.payload)  
     
    },
  }
});

// Exportar acciones
export const { setItem } = stageSlice.actions;


// Configurar el store
const store = configureStore({
  reducer: {
    itemstage: stageSlice.reducer
  }
});

// Definir el tipo RootState y AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;