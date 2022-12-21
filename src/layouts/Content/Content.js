import classNames from "classnames/bind";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Content.module.scss";
import Search from "../../components/Search";
import { fetchApiMovies } from "../../redux/features/movieSlice";
import { moviesSelector } from "../../redux/selector";
import MovieFilm from "../../components/MovieFilm";

const cx = classNames.bind(styles);

function Content() {
  const dispatch = useDispatch();

  const movies = useSelector(moviesSelector);

  useEffect(() => {
    dispatch(fetchApiMovies());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-8">
          <h1 className={cx("title-name")}>All Movie</h1>

          {/* Load movie */}
          {/* Page 1 */}
          <div className="row">
            {movies.map((movie) => {
              console.log("--> ", movie);
              return (
                <div key={movie.id} className="col l-2">
                  <MovieFilm movie={movie} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="col l-4">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Content;
