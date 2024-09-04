import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (_, { getState }) => {
    const token = getState().auth.accessToken;

    const res = await axios.get("/currentUser", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },
  {
    condition: (_, { getState }) => {
      const token = getState().auth.accessToken;
      return token !== null;
    },
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (userData, { getState }) => {
    const token = getState().auth.accessToken;

    const res = await axios.patch("/currentUser", userData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  },
  {
    condition: (_, { getState }) => {
      const token = getState().auth.accessToken;
      return token !== null;
    },
  }
);
