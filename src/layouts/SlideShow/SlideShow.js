import classNames from "classnames/bind";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useSelector } from "react-redux";

import styles from "./SlideShow.module.scss";
import Image from "../../components/Image";
import { moviesSelector } from "../../redux/selector";

const cx = classNames.bind(styles);

function SlideShow() {
  const movies = useSelector(moviesSelector);

  return (
    <div className="grid wide">
      <Slide>
        {movies.map((movie, index) => {
          return (
            <div key={index}>
              <Image
                className={cx("image-slides")}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="imageSlides"
              />
            </div>
          );
        })}
      </Slide>
    </div>
  );
}

export default SlideShow;
