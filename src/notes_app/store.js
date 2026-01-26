import { configureStore } from "@reduxjs/toolkit";
import NotesReducer from "./features/notes/notesSlice";
const sotre = configureStore({
  reducer: {
    notes: NotesReducer,
  },
});
export default sotre;
