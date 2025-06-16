import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userCredentials: null,
  },
  reducers: {
    addUserCredentials: (state, action) => {
      console.log(action.payload);
      state.userCredentials = action.payload;
    },
    removeUserCredentials: (state, action) => {
      return {};
    },
  },
});

export const { addUserCredentials, removeUserCredentials } = authSlice.actions;

export default authSlice.reducer;
