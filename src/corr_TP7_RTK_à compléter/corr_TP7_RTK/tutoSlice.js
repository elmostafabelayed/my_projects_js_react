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
    modifier: (state,action) => {
      const id = action.payload.id;
      const find =state.liste.find((e)=>e.code==id);
      find.titre=action.payload.titre;
      find.description=action.payload.description;
    },
    supprimer: (state, action) => {
      state.liste = state.liste.filter((t) => t.code !== action.payload);
    },
  },
});
export const { ajouter, modifier, supprimer } = tutoSlice.actions;
export default tutoSlice.reducer;
