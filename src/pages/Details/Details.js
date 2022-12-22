import { useSelector } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import classNames from "classnames/bind";

import styles from "./Details.module.scss";
import BackHomeIcon from "../../components/BackHomeIcon";
import Header from "../../layouts/Header";
import InfoDetail from "../../layouts/InfoDetail";
import { findByIdMovieSelector } from "../../redux/selector";
import Footer from "../../layouts/Footer";

const cx = classNames.bind(styles);

function Details() {
  const movie = useSelector(findByIdMovieSelector);

  return (
    <>
      <ScrollToTop smooth className={cx("scroll-top")} />
      <Header />
      <BackHomeIcon to="/" />
      <InfoDetail movie={movie} />
      <Footer />
    </>
  );
}

export default Details;
