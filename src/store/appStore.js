import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import moviesReducer from "./slices/movieSlice";
import gptReducer from "./slices/gptSlice";

const appStore = configureStore({
  reducer: { auth: authReducer, movies: moviesReducer, gpt: gptReducer },
});

export default appStore;
