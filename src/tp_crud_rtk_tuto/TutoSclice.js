import { createSlice } from "@reduxjs/toolkit";
import { listeTuto } from "./data";

const TutoSlice = createSlice({
  name: "list",
  initialState: {
    list: listeTuto,
    originalList: listeTuto,
  },
  reducers: {
    Ajoutk: (state, action) => {
      const nv = {
        code: action.payload.code,
        titre: action.payload.titre,
        description: action.payload.description,
      };

      state.list.push(nv);
      state.originalList.push(nv);
    },

    Modificationl: (state, action) => {
      const { id, titre, description } = action.payload;
      const b = state.list.find((e) => e.code == id);
      b.titre = titre;
      b.description = description;
      const b2 = state.originalList.find((e) => e.code == id);
      b2.titre = titre;
      b2.description = description;
    },
    Recherche: (state, action) => {
      const id = action.payload;
      if (!id) {
        state.list = state.originalList;
        return;
      }
      state.list = state.originalList.filter((e) =>
        e.titre.toLowerCase().includes(id.toLowerCase())
      );
    },
    Delete: (state, action) => {
      state.list = state.list.filter((t) => t.code !== action.payload);
      state.originalList = state.originalList.filter(
        (t) => t.code !== action.payload
      );
    },
  },
});

export const { Ajoutk, Modificationl, Recherche, Delete } = TutoSlice.actions;
export default TutoSlice.reducer;
