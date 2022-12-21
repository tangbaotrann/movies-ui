import classNames from "classnames/bind";
import Image from "../Image";

import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function SearchItem({ result }) {
  return (
    <div className={cx("wrapper-search-item")}>
      <Image
        className={cx("image-movie-film")}
        src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        alt="image-search"
      />

      <div className={cx("desc-search-item")}>
        <h2 className={cx("title-search-item")}>{result.title}</h2>
        <span className={cx("overview-search-item")}>{result.overview}</span>
      </div>
    </div>
  );
}

export default SearchItem;
