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
              <span className={cx("icon-back")}>BACK</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackHomeIcon;
