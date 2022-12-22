import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./BackHomeIcon.module.scss";

const cx = classNames.bind(styles);

function BackHomeIcon({ to }) {
  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-8">
          <div className={cx("inner-back")}>
            <Link to={to}>
              <div className={cx("back")}>
                <h1 className={cx("icon-back")}>&lt;</h1>
                <span className={cx("text-back")}>BACK</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackHomeIcon;
