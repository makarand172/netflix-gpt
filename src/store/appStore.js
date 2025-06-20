import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import moviesReducer from "./slices/movieSlice";

const appStore = configureStore({
  reducer: { auth: authReducer, movies: moviesReducer },
});

export default appStore;
