import classNames from "classnames/bind";

import styles from "./MovieFilm.module.scss";
import Image from "../Image";
import Button from "../Button";

const cx = classNames.bind(styles);

function MovieFilm({ movie }) {
  return (
    <>
      <Image
        className={cx("image-movie-film")}
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />
      <Button className={cx("btn-name-film")}>
        {movie.title || movie.name}
      </Button>
    </>
  );
}

export default MovieFilm;
