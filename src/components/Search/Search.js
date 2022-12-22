import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import TippyHeadless from "@tippyjs/react/headless";
import { useDispatch, useSelector } from "react-redux";
import filterSlice, {
  fetchApiSearchMovieByKeyword,
} from "../../redux/features/filterSlice";
import { filterSearchMovieByKeyWordSelector } from "../../redux/selector";

import Button from "../Button";
import Input from "../Input";
import styles from "./Search.module.scss";
import Popper from "../Popper/Popper";
import SearchItem from "./SearchItem";
import useDebounced from "../../hooks";

const cx = classNames.bind(styles);

function Search() {
  const [value, setValue] = useState("");
  const [showResultSearch, setShowResultSearch] = useState(false);

  const debouncedValue = useDebounced(value, 800);

  const dispatch = useDispatch();

  const resultSearchMovieByKeyword = useSelector(
    filterSearchMovieByKeyWordSelector
  );

  // result search
  useEffect(() => {
    dispatch(filterSlice.actions.arrivalResultSearchValue(value));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, value]);

  useEffect(() => {
    if (value.length > 0) {
      dispatch(fetchApiSearchMovieByKeyword(value));
    } else {
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, value]);

  // handle change input
  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  // hide result
  const handleClickOutSide = () => {
    setShowResultSearch(false);
  };

  // handle btn search
  const handleSearchBtn = () => {
    setShowResultSearch(true);
  };

  return (
    <>
      <TippyHeadless
        render={(attrs) => (
          <div tabIndex="-1" {...attrs} className={cx("popper-search")}>
            <Popper>
              <>
                {resultSearchMovieByKeyword?.length > 0 ? (
                  resultSearchMovieByKeyword.map((result) => {
                    return (
                      <div key={result?.id}>
                        <SearchItem result={result} />
                      </div>
                    );
                  })
                ) : (
                  <span className={cx("search-notification")}>
                    Find not found name film!
                  </span>
                )}
              </>
            </Popper>
          </div>
        )}
        placement="bottom-start"
        offset={[0, 4]}
        interactive
        visible={showResultSearch && value.length > 0}
        onClickOutside={handleClickOutSide}
      >
        <div className={cx("wrapper-search")}>
          <div className={cx("input-search")}>
            <Input
              type="text"
              value={value}
              onChange={handleChangeInput}
              onFocus={() => setShowResultSearch(true)}
              placeholder="Enter name film ..."
            />
          </div>
          <Button onClick={handleSearchBtn}>Search</Button>
        </div>
      </TippyHeadless>
    </>
  );
}

export default Search;
