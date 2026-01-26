import { configureStore } from "@reduxjs/toolkit";
import RecettesSlice from "./recetteSlice"
const store = configureStore({
    reducer:{
        recett:RecettesSlice
    }
});
export default store;