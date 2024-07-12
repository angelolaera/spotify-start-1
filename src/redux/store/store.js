// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "../reducers/albumReducer"; // Assicurati che questo percorso sia corretto

export const store = configureStore({
  reducer: {
    albums: albumReducer,
  },
});
