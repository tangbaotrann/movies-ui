import classNames from "classnames/bind";
import { useDispatch } from "react-redux";

import styles from "./MovieFilm.module.scss";
import Image from "../Image";
import Button from "../Button";
import { Link } from "react-router-dom";
import { fetchApiMovieFindById } from "../../redux/features/movieSlice";

const cx = classNames.bind(styles);

function MovieFilm({ movie }) {
  const dispatch = useDispatch();

  // handle find by id movie
  const handleFindByIdMovie = () => {
    dispatch(fetchApiMovieFindById(movie.id));
  };

  return (
    <>
      <Link to={`/details/${movie.id}`}>
        <Image
          className={cx("image-movie-film")}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          onClick={handleFindByIdMovie}
        />
      </Link>
      <Button className={cx("btn-name-film")} onClick={handleFindByIdMovie}>
        <Link to={`/details/${movie.id}`}>{movie.title || movie.name}</Link>
      </Button>
    </>
  );
}

export default MovieFilm;
