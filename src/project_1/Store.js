import { configureStore } from "@reduxjs/toolkit";
import reddomonde from "./DemandeSlice"
const Store =configureStore({
    reducer:{
        domone:reddomonde
    }
    
})
export default Store