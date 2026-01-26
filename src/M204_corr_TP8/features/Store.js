import { configureStore } from "@reduxjs/toolkit";
import StagiaireReducer from "./StagiaireSlice";
export default configureStore({
  reducer: {
    stg: StagiaireReducer,
  },
});
