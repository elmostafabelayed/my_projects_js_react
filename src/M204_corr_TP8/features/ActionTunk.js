import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getStagiaires = createAsyncThunk("stagiaire/getAll", async () => {
  return axios.get("http://localhost:5000/stagiaires").then((rep) => rep.data);
});

// export const getStagiaire = createAsyncThunk("stagiaire/get", async (id) => {
//   return axios
//     .get(`http://localhost:5000/stagiaires/${id}`)
//     .then((rep) => rep.data);
// });

export const createStagiaire = createAsyncThunk(
  "stagiaire/create",
  async (data) => {
    const response = await axios.post("http://localhost:5000/stagiaires", data);
    return response.data;
  }
);

export const updateStagiaire = createAsyncThunk(
  "stagiaire/update",
  async (data) => {
    const response = await axios.put(
      `http://localhost:5000/stagiaires/${data.id}`,
      data
    );
    return response.data;
  }
);

export const deleteStagiaire = createAsyncThunk(
  "stagiaire/delete",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/stagiaires/${id}`
    );
    return response.data;
  }
);
