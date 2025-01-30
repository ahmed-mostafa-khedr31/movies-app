
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunks
export const getMovies = createAsyncThunk('movies/getMovies', async (word) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5b96b970ad965f135d27e754ce54ac80&language=ar`);
  return { viewAllMovies: response.data.results, pagesnum: response.data.total_pages };
});
export const searchMovies = createAsyncThunk('movies/searchMovies', async (word) => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5b96b970ad965f135d27e754ce54ac80&query=${word}`);
  return { viewAllMovies: response.data.results, pagesnum: response.data.total_pages };
});


export const getPageCount = createAsyncThunk('movies/getPageCount', async (pageNum) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5b96b970ad965f135d27e754ce54ac80&language=ar&page=${pageNum}`);
  return { viewAllMovies: response.data.results, pagesnum: response.data.total_pages };
});



// Slice
const moveListSlice = createSlice({
  name: 'moveList',
  initialState: {
    viewAllMovies: [],
    pagesnum: 0,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = 'loading'; // Set status to loading when the request is pending
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.viewAllMovies = action.payload.viewAllMovies;
        state.pagesnum = action.payload.pagesnum;
        state.status = 'succeeded'; // Set status to succeeded when the request is fulfilled
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed when the request is rejected
        state.error = action.error.message; // Capture the error message
      })
      .addCase(searchMovies.pending, (state) => {
        state.status = 'loading'; // Set status to loading when the request is pending
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.viewAllMovies = action.payload.viewAllMovies;
        state.pagesnum = action.payload.pagesnum;
        state.status = 'succeeded'; // Set status to succeeded when the request is fulfilled
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed when the request is rejected
        state.error = action.error.message; // Capture the error message
      })
      .addCase(getPageCount.pending, (state) => {
        state.status = 'loading'; // Set status to loading when the request is pending
      })
      .addCase(getPageCount.fulfilled, (state, action) => {
        state.viewAllMovies = action.payload.viewAllMovies;
        state.pagesnum = action.payload.pagesnum;
        state.status = 'succeeded'; // Set status to succeeded when the request is fulfilled
      })
      .addCase(getPageCount.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed when the request is rejected
        state.error = action.error.message; // Capture the error message
      });
  },
});


export default moveListSlice.reducer;