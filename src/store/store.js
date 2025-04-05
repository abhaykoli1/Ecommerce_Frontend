import { configureStore } from "@reduxjs/toolkit";

// import authReducer from "./auth-slice";
import usersSlice from "./users-slice";
const store = configureStore({
  reducer: {
    // auth: authReducer,
    user: usersSlice,
  },
});

export default store;
