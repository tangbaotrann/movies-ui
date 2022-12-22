import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./Search.module.scss";
import Image from "../Image";
import { fetchApiMovieFindById } from "../../redux/features/movieSlice";
import Button from "../Button";

const cx = classNames.bind(styles);

function SearchItem({ result }) {
  const dispatch = useDispatch();

  // handle find by id movie
  const handleFindByIdMovie = () => {
    dispatch(fetchApiMovieFindById(result.id));
  };

  return (
    <div className={cx("wrapper-search-item")}>
      <Link to={`/details/${result.id}`}>
        <Image
          className={cx("image-movie-film")}
          src={`https://image.tmdb.org/t/p/original${result?.poster_path}`}
          onClick={handleFindByIdMovie}
          alt="image-search"
        />
      </Link>

      <div className={cx("desc-search-item")}>
        <Button
          onClick={handleFindByIdMovie}
          className={cx("btn-title-search")}
        >
          <Link to={`/details/${result.id}`}>
            <h2 className={cx("title-search-item")}>
              {result?.title || result?.name}
            </h2>
          </Link>
        </Button>
        <span className={cx("overview-search-item")}>{result?.overview}</span>
      </div>
    </div>
  );
}

export default SearchItem;
