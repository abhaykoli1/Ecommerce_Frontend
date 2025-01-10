import axios from "axios";
import config from "../config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk action for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${config.API_URL}/api/v1/login`,
        { email, password },
        { withCredentials: true } // Ensures cookies are sent and received
      );

      return response.data.user; // Return user data on successful login
    } catch (error) {
      // Handle cases where error.response might be undefined
      if (error.response && error.response.data && error.response.data.detail) {
        return rejectWithValue(error.response.data.detail); // Return API error message
      }
      return rejectWithValue("An unexpected error occurred. Please try again.");
    }
  }
);

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      document.cookie = "token=; Max-Age=0"; // Clear the token cookie on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to login";
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
