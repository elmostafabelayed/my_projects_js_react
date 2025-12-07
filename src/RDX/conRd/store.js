import { configureStore } from "@reduxjs/toolkit";
import reducerTache from './TacheSlice'
export default configureStore ({
    reducer:{
        tach:reducerTache
    }
})