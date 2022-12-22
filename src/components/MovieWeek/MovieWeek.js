import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import styles from "./MovieWeek.module.scss";
import Button from "../Button";
import Image from "../Image";
import { fetchApiMovieFindById } from "../../redux/features/movieSlice";

const cx = classNames.bind(styles);

function MovieWeek({ movie }) {
  const dispatch = useDispatch();

  // handle find by id movie
  const handleFindByIdMovie = () => {
    dispatch(fetchApiMovieFindById(movie.id));
  };

  return (
    <>
      <Image
        className={cx("image-movie-week")}
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />

      <div className={cx("inner-movie-week")}>
        <Button className={cx("btn-name-week")} onClick={handleFindByIdMovie}>
          <Link to={`/details/${movie.id}`}>{movie.title || movie.name}</Link>
        </Button>
        <span className={cx("vote-movie-week")}>
          Vote average: {movie.vote_average}
        </span>
        <span className={cx("overview-movie-week")}>
          Overview: {movie.overview}
        </span>
      </div>
    </>
  );
}

export default MovieWeek;
