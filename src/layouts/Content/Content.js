import classNames from "classnames/bind";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import styles from "./Content.module.scss";
import {
  fetchApiAllMoviesPage4,
  fetchApiAllMoviesPage5,
  fetchApiMovies,
  fetchApiMovieWeeks,
  fetchApiTrendingMovies,
  fetchApiTrendingMoviesPage2,
  fetchApiTrendingMoviesPage3,
} from "../../redux/features/movieSlice";
import {
  isLoadingAllMovie,
  isLoadingSeeMore,
  isLoadingTrendingMovie,
  moviesSelector,
  moviesTrendingSelector,
  moviesWeeksSelector,
} from "../../redux/selector";
import MovieFilm from "../../components/MovieFilm";
import MovieWeek from "../../components/MovieWeek";
import Button from "../../components/Button";

const cx = classNames.bind(styles);

function Content() {
  const dispatch = useDispatch();

  const movies = useSelector(moviesSelector);
  const trendingMovies = useSelector(moviesTrendingSelector);
  const movieWeeks = useSelector(moviesWeeksSelector);
  const isLoadingMore = useSelector(isLoadingSeeMore);
  const isLoadingMovies = useSelector(isLoadingAllMovie);
  const isLoadingTrending = useSelector(isLoadingTrendingMovie);

  // trending movie
  useEffect(() => {
    dispatch(fetchApiTrendingMovies());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // all movie
  useEffect(() => {
    dispatch(fetchApiMovies());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // trending movie see more (page 1-2-3)
  const handleClickedBtnSeeMoreTrending = () => {
    if (trendingMovies.length <= 20) {
      dispatch(fetchApiTrendingMoviesPage2());
    } else if (trendingMovies.length <= 40) {
      dispatch(fetchApiTrendingMoviesPage3());
    } else if (trendingMovies.length >= 60) {
      dispatch(fetchApiTrendingMovies());
    }
  };

  // all movie see more (page 4-5-6)
  const handleClickedBtnSeeMoreAll = () => {
    if (movies.length <= 20) {
      dispatch(fetchApiAllMoviesPage4());
    } else if (movies.length <= 40) {
      dispatch(fetchApiAllMoviesPage5());
    } else if (movies.length >= 60) {
      dispatch(fetchApiMovies());
    }
  };

  // movie weeks
  useEffect(() => {
    dispatch(fetchApiMovieWeeks());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-8">
          {/* Trending movie */}
          <h1 className={cx("title-name")}>Trending Movie</h1>
          <div className="row">
            {isLoadingTrending ? (
              <CircularProgress />
            ) : (
              <>
                {trendingMovies.map((movie) => {
                  return (
                    <div key={movie.id} className="col l-2">
                      <MovieFilm movie={movie} />
                    </div>
                  );
                })}
              </>
            )}
          </div>
          {isLoadingMore ? (
            <CircularProgress />
          ) : (
            <Button
              className={cx("btn-see-more-trending")}
              onClick={handleClickedBtnSeeMoreTrending}
            >
              {trendingMovies.length >= 60 ? "Collapse" : "See more"}
            </Button>
          )}

          {/* All movie */}
          <h1 className={cx("title-name")}>All Movie</h1>
          <div className="row">
            {isLoadingMovies ? (
              <CircularProgress />
            ) : (
              <>
                {movies.map((movie) => {
                  return (
                    <div key={movie.id} className="col l-2">
                      <MovieFilm movie={movie} />
                    </div>
                  );
                })}
              </>
            )}
          </div>
          {isLoadingMore ? (
            <CircularProgress />
          ) : (
            <Button
              className={cx("btn-see-more-all")}
              onClick={handleClickedBtnSeeMoreAll}
            >
              {movies.length >= 60 ? "Collapse" : "See more"}
            </Button>
          )}
        </div>

        {/* Movie week */}
        <div className="col l-4">
          <div className={cx("container-movie-week")}>
            <h1 className={cx("title-name-week")}>Hot Week</h1>
            {movieWeeks.map((movie) => {
              return (
                <div key={movie.id} className="col l-12">
                  <div className={cx("inner-movie-week")}>
                    <MovieWeek movie={movie} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
