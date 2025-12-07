import { createSlice } from "@reduxjs/toolkit";

const TacheSlice = createSlice({
  name: "Tache",
  initialState: {
    listTach: [],
  },
  reducers: {
    ajouter: (state, action) => {
      const nTach = {
        id: "ID" + Date.now(),
        description: action.payload,
        termin: false,
      };
      state.listTach = [...state.listTach, nTach];
    },
    changerEtat:(state,action)=>{
        state.listTach=state.listTach.map((tache) =>
        tache.id === action.payload ? { ...tache, termin: !tache.termin } : tache
      )
    },
    Supprimer:(state,action)=>{
        state.listTach=state.listTach.filter((t) => t.id !== action.payload)
    }
  },
});

export const { ajouter, Supprimer, changerEtat } = TacheSlice.actions;
export default TacheSlice.reducer;
