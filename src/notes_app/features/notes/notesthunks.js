import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API = "http://localhost:5000/notes";
export const getNotes = createAsyncThunk(
  "notes/getAll",
  async () => {
    const res = await axios.get(API);
    return res.data;
  }
);
export const creatNotes = createAsyncThunk(
  "notes/create",
  async (data) => {
    const res = await axios.post(API, data);
    return res.data;
  }
);
export const updateNotes = createAsyncThunk(
  "notes/update",
  async (data) => {
    const res = await axios.patch(
      `http://localhost:5000/notes/${Number(data.id)}`,
      data
    );
    return res.data;
  }
);
export const deleteNotes = createAsyncThunk(
  "notes/delete",
  async (id) => {
    await axios.delete(`${API}/${id}`);
    return id;
  }
);
