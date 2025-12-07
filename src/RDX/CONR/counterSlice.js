import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    comp: 0,
  },
  reducers: {
    incrment: (state) => {
      state.comp++;
    },
    decriment: (state) => {
      state.comp--;
    },
    incbysp: (state,action) => {
      state.comp+=action.payload;
    },
  },
});
export const { incrment, decriment ,incbysp } = counterSlice.actions;
export default counterSlice.reducer;
