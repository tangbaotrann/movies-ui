import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import Menu from "../../components/Menu";
import Search from "../../components/Search";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className="grid wide">
      <div className="row">
        <div className={cx("wrapper-header")}>
          {/* Search */}
          <div className="col l-6">
            <div className={cx("search-header")}>
              <Search />
            </div>
          </div>

          {/* Menu */}
          <div className="col l-6">
            <div className={cx("menu-header")}>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
