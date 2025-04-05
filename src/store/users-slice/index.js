import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/api/v1/user/${userId}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.detail || "Failed to fetch user.");
      }

      const data = await response.json();
      return data; // Resolved data from the API
    } catch (error) {
      return rejectWithValue("An unexpected error occurred.");
    }
  }
);

// Create the user slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearUserState: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong.";
      });
  },
});

export const { clearUserState } = userSlice.actions;
export default userSlice.reducer;
