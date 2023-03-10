import classNames from "classnames/bind";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu() {
  return (
    <div className={cx("menu-wrapper")}>
      <ul>
        <li>HOME</li>
        <li>MOVIE</li>
        <li>ABOUT</li>
        <li>LOGIN</li>
      </ul>
    </div>
  );
}

export default Menu;
