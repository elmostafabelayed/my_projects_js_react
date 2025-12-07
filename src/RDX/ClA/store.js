import { configureStore } from "@reduxjs/toolkit";
import rchReducer from './ListSlice'
export default configureStore({
    reducer:{
        cher:rchReducer
    }
})