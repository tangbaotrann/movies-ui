import classNames from "classnames/bind";

import styles from "./InfoDetail.module.scss";
import Image from "../../components/Image";
import Button from "../../components/Button";

const cx = classNames.bind(styles);

function InfoDetail({ movie }) {
  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-4">
          <Image
            className={cx("image-info-detail")}
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt="img-info-detail"
          />
        </div>

        <div className="col l-8">
          <div className={cx("inner-info-detail")}>
            <h1 className={cx("title-name")}>{movie?.title || movie?.name}</h1>
            <p className={cx("release-date")}>
              Release Date: {movie?.release_date}
            </p>

            <div className={cx("language")}>
              <p>Spoken Languages: </p>
              {movie?.spoken_languages.map((language) => {
                return (
                  <div
                    key={language.iso_639_1}
                    className={cx("language-display")}
                  >
                    {language.name}
                  </div>
                );
              })}
            </div>

            <div className={cx("genres")}>
              <p>Genres: </p>
              {movie?.genres.map((gen) => {
                return (
                  <div key={gen.id} className={cx("gen-display")}>
                    {gen.name}
                  </div>
                );
              })}
            </div>

            <div className={cx("overviews")}>
              <p className={cx("overview")}>Overview: </p>
              <p>{movie?.overview}</p>
            </div>

            <div className={cx("quantity")}>
              <p>Runtime: {movie?.runtime} min</p>
              <p className={cx("vote-average")}>
                Vote Average: {movie?.vote_average}
              </p>
              <p>Vote Count: {movie?.vote_count}</p>
              <p className={cx("popularity")}>
                Popularity: {movie?.popularity}
              </p>
            </div>

            {/* button */}
            <Button className={cx("btn-now")}>Watch now</Button>
            <Button className={cx("btn-trailer")}>Watch trailer</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoDetail;
