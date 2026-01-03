import { createSlice } from "@reduxjs/toolkit";
import {
  fetchStagiaires,
  modifiStagiaire,
  deletedStagiaire,
  createStagiaire,
} from "./ActionThunk";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    data: [],
    filteredData: [],
    error: "",
  },
  reducers: {
    Recherche: (state, action) => {
      const val = action.payload;
      val == null
        ? (state.filteredData = state.data)
        : (state.filteredData = state.data.filter((e) =>
            e.nom.toLowerCase().includes(val.toLowerCase())
          ));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStagiaires.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStagiaires.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.filteredData = action.payload;
      })
      .addCase(fetchStagiaires.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.data = [];
        state.filteredData = [];
      })
      .addCase(deletedStagiaire.fulfilled, (state, action) => {
        state.data = state.data.filter((e) => e.id != action.payload);
        state.filteredData = state.filteredData.filter(
          (e) => e.id !== action.payload
        );
      })
      .addCase(createStagiaire.fulfilled, (state, action) => {
        const { id, nom, email, tel, niveau } = action.payload;
        state.data.push({id, nom, email, tel, niveau});
        state.filteredData.push({id, nom, email, tel, niveau});
      });
  },
});

export const { Recherche, resetRecherche } = userSlice.actions;
export default userSlice.reducer;
