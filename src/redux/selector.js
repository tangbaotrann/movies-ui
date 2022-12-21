import { createSelector } from "@reduxjs/toolkit";

// movies
export const moviesSelector = (state) => state.movies.data;
export const moviesTrendingSelector = (state) => state.movies.dataTrending;
export const moviesWeeksSelector = (state) => state.movies.dataMovieWeeks;
export const isLoadingSeeMore = (state) => state.movies.isLoading;
export const isLoadingAllMovie = (state) => state.movies.isLoadingMovies;
export const isLoadingTrendingMovie = (state) =>
  state.movies.isLoadingTrendingMovies;

// search
export const filterSearchSelector = (state) => state.filterSearch.searchValue;

// filter film
export const filterSearchFilm = createSelector(
  moviesSelector,
  filterSearchSelector,
  (movies, textSearch) => {
    if (textSearch) {
      const movieFilter = movies.filter((movie) => movie.title === textSearch);

      return movieFilter;
    }
  }
);
