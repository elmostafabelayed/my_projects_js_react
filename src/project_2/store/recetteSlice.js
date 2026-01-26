import { createSlice } from "@reduxjs/toolkit";
import recettesInitiales from "../data"
const RecettesSlice= createSlice({
    name:'recette',
    initialState:{
        recettes:recettesInitiales,

    },
    reducers:{
        supprimerRecette:(state,action)=>{
            const id = action.payload.id;
            state.recettes=state.recettes.filter(e=>e.id!=id)
        },
         toggleFavori:(state,action)=>{
            const id = action.payload.id;
            const Etat=action.payload.Etat;
            const find = state.recettes.find(e=>e.id ==id);
            find.favori=Etat;
        }
    }
});
export const {supprimerRecette,toggleFavori}=RecettesSlice.actions;
export default RecettesSlice.reducer;
