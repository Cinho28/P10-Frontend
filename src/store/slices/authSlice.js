import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  user: null,
};

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await axios.post(
    "http://localhost:3001/api/v1/user/login",
    credentials,
  );
  const token = response.data.body.token;
  localStorage.setItem("token", token);
  return response.data.body;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
