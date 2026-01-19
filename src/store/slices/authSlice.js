import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  token:
    localStorage.getItem("token") || sessionStorage.getItem("token") || null,
  isAuthenticated:
    !!localStorage.getItem("token") || !!sessionStorage.getItem("token"),
  user: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { dispatch }) => {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      {
        email: credentials.email,
        password: credentials.password,
      },
    );
    const token = response.data.body.token;
    if (credentials.rememberMe) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }
    await dispatch(fetchUserProfile(token));
    return response.data.body;
  },
);

export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (token) => {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data.body;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
