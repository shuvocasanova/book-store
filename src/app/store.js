import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice/booksSlice";

const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});

export default store;