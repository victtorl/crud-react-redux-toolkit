import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";


// Cargar el estado desde localStorage
const loadState = (): Item[] => {
    const storedState = localStorage.getItem("items");
    return storedState ? JSON.parse(storedState) : [];
  };
  
  // Guardar el estado en localStorage
  const saveState = (state: Item[]) => {
    localStorage.setItem("items", JSON.stringify(state));
  };

// Definir el tipo de los items
interface Item {
  id: string;
  title: string;
  description: string;
  url: string;
}

// Estado inicial
const initialState: Item[] = loadState();

// Crear el slice de Redux
const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<Item, "id">>) => {
      state.push({ id: nanoid(), ...action.payload });
      saveState(state);
    },
    updateItem: (state, action: PayloadAction<Item>) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        saveState(state);
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
        const newState = state.filter(item => item.id !== action.payload);
        saveState(newState);
        return newState;
      }
  }
});

// Exportar acciones
export const { addItem, updateItem, deleteItem } = itemSlice.actions;

export {saveState}

// Configurar el store
const store = configureStore({
  reducer: {
    items: itemSlice.reducer
  }
});

// Definir el tipo RootState y AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;