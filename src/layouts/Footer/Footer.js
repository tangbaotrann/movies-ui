import classNames from "classnames/bind";

import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper-footer")}>
      <div className="grid wide">
        <div className="row">
          <div className="col l-4">
            <h1 className={cx("title-footer")}>FOOTER CONTENT</h1>
            <p>
              This Website I made for fun, tranning my skill. If there are
              mistakes, pls for give me and contribute directly to my social
              media. Thanks!!
            </p>
          </div>
          <div className="col l-4">
            <h1 className={cx("title-footer")}>CONTACT US</h1>
            <p>Email: tangbaotrann@gmail.com</p>
            <p>Number: 03256676569</p>
          </div>
          <div className="col l-4">
            <h1 className={cx("title-footer")}>SOCIAL MEDIA</h1>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
