import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./stagiaireSlice"; // default export

export default configureStore({
    reducer: {
        stagiaires: userSlice
    }
});
