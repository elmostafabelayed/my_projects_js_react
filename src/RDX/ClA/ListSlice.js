import { createSlice } from "@reduxjs/toolkit";
import { list } from "./data";
export const counterSlice = createSlice({
  initialState: {
    name:'Listchr',
    type:"",
    resultas:[]
  },
  reducers: {
    onChercheSubmitApp: (state,action) => {
      state.type=action.payload;
      state.resultas=list.filter((item) => item.type.toUpperCase() == state.type)
    },
  },
});
export const { onChercheSubmitApp } = counterSlice.actions;
export default counterSlice.reducer;