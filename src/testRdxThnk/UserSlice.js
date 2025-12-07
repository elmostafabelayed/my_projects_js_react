import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const getUsers = createAsyncThunk("users/getUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});
export const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
    error: "",
  },
  reducers: {
    viderList: (state, action) => {
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.users = [];
        state.loading = false;
      });
  },
});
export const { viderList } = userSlice.actions;
export { getUsers };
export default userSlice.reducer;
