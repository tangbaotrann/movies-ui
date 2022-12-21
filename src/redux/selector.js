import { createSelector } from "@reduxjs/toolkit";

export const moviesSelector = (state) => state.movies.data;
export const filterSearchSelector = (state) => state.filterSearch.searchValue;

// filter film
export const filterSearchFilm = createSelector(
  moviesSelector,
  filterSearchSelector,
  (movies, textSearch) => {
    if (textSearch) {
      const movieFilter = movies.filter((movie) => movie.title === textSearch);
      console.log("13", movieFilter);
      return movieFilter;
    }
  }
);
