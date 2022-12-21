import classNames from "classnames/bind";

import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

function Input({ className, type, onChange, onFocus, value, placeholder }) {
  return (
    <input
      className={cx("inner-input", { [className]: className })}
      type={type}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
    />
  );
}

export default Input;
