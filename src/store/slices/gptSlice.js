import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptToggle: false,
    movieNames: null,
    moviesList: null,
  },
  reducers: {
    toggleGpt: (state, action) => {
      state.gptToggle = !state.gptToggle;
    },
    addGptSuggestedMovies: (state, action) => {
      const { movieNames, moviesList } = action.payload;
      state.movieNames = movieNames;
      state.moviesList = moviesList;
    },
  },
});

export const { toggleGpt, addGptSuggestedMovies } = gptSlice.actions;
export default gptSlice.reducer;
