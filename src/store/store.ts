import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import stageReducer from "./stageSlice";

export const store = configureStore({
  reducer: {
    itemscard: postReducer,
     itemedit: stageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;