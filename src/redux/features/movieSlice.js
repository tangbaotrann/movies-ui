import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// load movie
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

// store
const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    data: [],
  },
  //   reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApiMovies.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default movieSlice;
