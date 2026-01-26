import { createSlice } from "@reduxjs/toolkit";
import {
  createStagiaire,
  deleteStagiaire,
  getStagiaires,
  updateStagiaire,
} from "./ActionTunk";

const StagiaireSlice = createSlice({
  name: "StgSlice",
  initialState: {
    list: [],
    loading: false,
    error: "",
    flag: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStagiaires.pending, (state) => {
        state.loading = true;
        state.list = [];
        state.error = "";
      })
      .addCase(getStagiaires.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.error = "";
      })
      .addCase(getStagiaires.rejected, (state, action) => {
        state.loading = false;
        state.list = [];
        state.error = action.error.message;
      })
      .addCase(createStagiaire.pending, (state) => {
        state.loading = true;
        state.flag = false;
      })
      .addCase(createStagiaire.fulfilled, (state, action) => {
        state.loading = false;
        state.flag = true;
        //autre méthode:
        //state.list=[...state.list, action.payload]
        state.error = "";
      })
      .addCase(createStagiaire.rejected, (state, action) => {
        state.loading = false;
        state.flag = false;
        state.error = action.error.message;
      })
      .addCase(deleteStagiaire.pending, (state) => {
        state.loading = true;
        state.flag = false;
      })
      .addCase(deleteStagiaire.fulfilled, (state, action) => {
        state.loading = false;
        state.flag = true;
        //autre méthode:
        //state.list=state.list.filter(stg=>stg.id!==action.payload.id)
        state.error = "";
      })
      .addCase(deleteStagiaire.rejected, (state, action) => {
        state.loading = false;
        state.flag = false;
        state.error = action.error.message;
      })
      .addCase(updateStagiaire.pending, (state) => {
        state.loading = true;
        state.flag = false;
      })
      .addCase(updateStagiaire.fulfilled, (state, action) => {
        state.loading = false;
        state.flag = true;
        //autre méthode:
        //state.list=state.list.map(stg=>stg.id==action.payload.id? action.payload: stg);
        state.error = "";
      })
      .addCase(updateStagiaire.rejected, (state, action) => {
        state.loading = false;
        state.flag = false;
        state.error = action.error.message;
      });
  },
});
export default StagiaireSlice.reducer;
