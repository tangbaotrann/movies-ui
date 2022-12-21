import classNames from "classnames/bind";

import styles from "./MovieWeek.module.scss";
import Button from "../Button";
import Image from "../Image";

const cx = classNames.bind(styles);

function MovieWeek({ movie }) {
  return (
    <>
      <Image
        className={cx("image-movie-week")}
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />

      <div className={cx("inner-movie-week")}>
        <Button className={cx("btn-name-week")}>
          {movie.title || movie.name}
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
