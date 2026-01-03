import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStagiaires = createAsyncThunk(
  "stagiaires/fetchAll",
  async (data) => {
    const response = await axios.get("http://localhost:5000/stagiaires", data);
    return response.data;
  }
);

export const createStagiaire = createAsyncThunk(
  "stagiaires/create",
  async (data) => {
    const response = await axios.post("http://localhost:5000/stagiaires", data);
    return response.data;
  }
);

export const modifiStagiaire = createAsyncThunk("stagiaires/Modifi",async (data)=>{
    const res = await axios.put( `http://localhost:5000/stagiaires/${data.id}`,data);
    return res.data;
})
export const deletedStagiaire = createAsyncThunk("stagiaires/deleted",async (id)=>{
    const res = await axios.delete(`http://localhost:5000/stagiaires/${id}`); ;
    return id;
})
