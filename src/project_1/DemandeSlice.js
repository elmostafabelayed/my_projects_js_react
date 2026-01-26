import { createSlice } from "@reduxjs/toolkit";
import data from "./data"
const DemandeSlice = createSlice({  
    name: "demande",  
    initialState: {    
        demandes: data,
    },
    reducers:{
        ChangerEtat :(state,action)=>{
            const id = action.payload.id
            const etat = action.payload.etat
            const  found = state.demandes.find(e=>e.id==id)
            found.etat=etat;
        },
        Ajouter:(state,action)=>{
            state.demandes.push(action.payload)
        }
    }
});
export const {ChangerEtat,Ajouter}=DemandeSlice.actions;
export default DemandeSlice.reducer
