import { creatNotes, deleteNotes, getNotes, updateNotes } from "./notesthunks";
import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    loading: false,
    error: "",
    selectnoteid: null,
  },
  reducers: {
    notecl: (state, action) => {
      state.selectnoteid = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getNotes.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(getNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(creatNotes.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(creatNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes.unshift(action.payload);
      })

      .addCase(creatNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = state.notes.filter((nts) => nts.id != action.payload);
        state.error = "";
      })

      .addCase(deleteNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = state.notes.map((nts) =>
          nts.id == action.payload.id ? action.payload : nts
        );
        state.error = "";
      })
      .addCase(updateNotes.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { notecl } = noteSlice.actions;
export default noteSlice.reducer;
