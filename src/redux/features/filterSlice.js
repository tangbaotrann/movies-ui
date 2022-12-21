import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: {
    searchValue: "",
    isLoading: false,
  },
  reducers: {
    arrivalResultSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export default filterSlice;
