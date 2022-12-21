import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// load all movie (page 1)
export const fetchApiMovies = createAsyncThunk(
  "movieSlice/fetchApiMovies",
  async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a889e31d75e30f7dae101240282d12d5&language=en-US&page=1`
      );

      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  }
);

// load movie when click (page 2)
export const fetchApiTrendingMoviesPage2 = createAsyncThunk(
  "movieSlice/fetchApiTrendingMoviesPage2",
  async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a889e31d75e30f7dae101240282d12d5&language=en-US&page=2`
      );

      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  }
);

// load movie when click (page 3)
export const fetchApiTrendingMoviesPage3 = createAsyncThunk(
  "movieSlice/fetchApiTrendingMoviesPage3",
  async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a889e31d75e30f7dae101240282d12d5&language=en-US&page=3`
      );

      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  }
);

// load movie when click (page 4)
export const fetchApiAllMoviesPage4 = createAsyncThunk(
  "movieSlice/fetchApiAllMoviesPage4",
  async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a889e31d75e30f7dae101240282d12d5&language=en-US&page=4`
      );

      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  }
);

// load movie when click (page 5)
export const fetchApiAllMoviesPage5 = createAsyncThunk(
  "movieSlice/fetchApiAllMoviesPage5",
  async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a889e31d75e30f7dae101240282d12d5&language=en-US&page=5`
      );

      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  }
);

// load trending movie
export const fetchApiTrendingMovies = createAsyncThunk(
  "movieSlice/fetchApiTrendingMovies",
  async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=a889e31d75e30f7dae101240282d12d5`
      );

      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  }
);

// movie week
export const fetchApiMovieWeeks = createAsyncThunk(
  "movieSlice/fetchApiMovieWeeks",
  async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=a889e31d75e30f7dae101240282d12d5`
      );

      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  }
);

// store
const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    data: [],
    dataTrending: [],
    dataMovieWeeks: [],
    isLoading: false,
    isLoadingMovies: false,
    isLoadingTrendingMovies: false,
  },
  extraReducers: (builder) => {
    builder
      // all movie
      .addCase(fetchApiMovies.pending, (state, action) => {
        state.isLoadingMovies = true;
      })
      .addCase(fetchApiMovies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoadingMovies = false;
      })
      // trending movie
      .addCase(fetchApiTrendingMovies.pending, (state, action) => {
        state.isLoadingTrendingMovies = true;
      })
      .addCase(fetchApiTrendingMovies.fulfilled, (state, action) => {
        state.dataTrending = action.payload;
        state.isLoadingTrendingMovies = false;
      })
      // trending movie page 2
      .addCase(fetchApiTrendingMoviesPage2.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchApiTrendingMoviesPage2.fulfilled, (state, action) => {
        const movie = action.payload;
        const _movie = state.dataTrending.map((movie) => movie);
        const updated = [..._movie, ...movie];

        state.dataTrending = updated;
        state.isLoading = false;
      })
      // trending movie page 3
      .addCase(fetchApiTrendingMoviesPage3.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchApiTrendingMoviesPage3.fulfilled, (state, action) => {
        const movie = action.payload;
        const _movie = state.dataTrending.map((movie) => movie);
        const updated = [..._movie, ...movie];

        state.dataTrending = updated;
        state.isLoading = false;
      })
      // all movie page 4
      .addCase(fetchApiAllMoviesPage4.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchApiAllMoviesPage4.fulfilled, (state, action) => {
        const movie = action.payload;
        const _movie = state.data.map((movie) => movie);
        const updated = [..._movie, ...movie];

        state.data = updated;
        state.isLoading = false;
      })
      // all movie page 5
      .addCase(fetchApiAllMoviesPage5.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchApiAllMoviesPage5.fulfilled, (state, action) => {
        const movie = action.payload;
        const _movie = state.data.map((movie) => movie);
        const updated = [..._movie, ...movie];

        state.data = updated;
        state.isLoading = false;
      })
      // movie week
      .addCase(fetchApiMovieWeeks.fulfilled, (state, action) => {
        state.dataMovieWeeks = action.payload;
      });
  },
});

export default movieSlice;
