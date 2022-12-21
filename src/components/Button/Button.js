import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ children, className, onClick }) {
  return (
    <button
      className={cx("wrapper-button", { [className]: className })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
