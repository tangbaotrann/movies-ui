import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// search by keyword
export const fetchApiSearchMovieByKeyword = createAsyncThunk(
  "filterSlice/fetchApiSearchMovieByKeyword",
  async (movie) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=a889e31d75e30f7dae101240282d12d5&language=en-US&query=${movie}&page=1&include_adult=false`
      );

      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  }
);

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: {
    dataSearch: [],
    searchValue: "",
    isLoading: false,
  },
  reducers: {
    arrivalResultSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiSearchMovieByKeyword.fulfilled, (state, action) => {
      state.dataSearch = action.payload;
    });
  },
});

export default filterSlice;
