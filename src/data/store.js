import { configureStore } from "@reduxjs/toolkit";

import moveListReducer from "./moviesSlice";
import movieDetailsReducer from './movieDetailsSlice'

export const store = configureStore({
  reducer: {
    movies: moveListReducer,
    movieDetails: movieDetailsReducer,
  },
});
