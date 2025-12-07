import { configureStore } from "@reduxjs/toolkit";
import reducerlist from './TutoSclice'
export default configureStore ({
    reducer:{
        list:reducerlist
    }
})