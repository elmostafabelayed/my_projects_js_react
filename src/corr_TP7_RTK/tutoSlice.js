import { createSlice } from "@reduxjs/toolkit";
import { listeTuto } from "./data";

const tutoSlice = createSlice({
  name: "tutoSlice",
  initialState: {
    liste: listeTuto,
  },
  reducers: {
    ajouter: (state, action) => {
      state.liste.push(action.payload);
    },
    modifier: (state, action) => {
      state.liste = state.liste.map((t) =>
        t.code == action.payload.code ? action.payload : t
      );
    },
    supprimer: (state, action) => {
      state.liste = state.liste.filter((t) => t.code !== action.payload);
    },
  },
});
export const { ajouter, modifier, supprimer } = tutoSlice.actions;
export default tutoSlice.reducer;
