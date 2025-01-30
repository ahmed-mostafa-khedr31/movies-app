// ... existing imports ...
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk for fetching movie details
export const fetchMovieDetails = createAsyncThunk(
  'movieDetails/fetchMovieDetails',
  async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5b96b970ad965f135d27e754ce54ac80&language=ar`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    return await response.json();
  }
);

// Create the movieDetails slice
const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState: {
    details: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export default movieDetailsSlice.reducer;