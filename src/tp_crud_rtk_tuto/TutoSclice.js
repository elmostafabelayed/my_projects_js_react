import { createSlice } from "@reduxjs/toolkit";
import { listeTuto } from "./data";

const TutoSlice = createSlice({
  name: "list",
  initialState: {
    list: listeTuto,
    NOrList: []
  },
  reducers: {
    Ajoutk: (state, action) => {
      const nv = {
        code: action.payload.code,
        titre: action.payload.titre,
        description: action.payload.description,
      };
      state.list = [...state.list, nv];
      state.NOrList=state.list
    },

    Modification: (state, action) => {},
    Recherche: (state, action) => {
      if (action.payload != "") {
        state.list = state.list.filter((e) =>
          e.titre.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
    Delete: (state, action) => {
      state.list = state.list.filter((t) => t.code != action.payload);
    },
  },
});
export const { Ajoutk, Modification, Recherche, Delete } = TutoSlice.actions;
export default TutoSlice.reducer;
