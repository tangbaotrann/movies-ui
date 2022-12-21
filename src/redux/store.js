import { configureStore } from "@reduxjs/toolkit";

import movieSlice from "./features/movieSlice";
import filterSlice from "./features/filterSlice";

const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    filterSearch: filterSlice.reducer,
  },
});

export default store;
