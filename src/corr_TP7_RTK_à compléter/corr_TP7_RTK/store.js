import { configureStore } from "@reduxjs/toolkit";
import tutoReducer from "./tutoSlice";

export default configureStore({
  reducer: {
    tuto: tutoReducer,
  },
});
