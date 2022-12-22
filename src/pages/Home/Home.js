import classNames from "classnames/bind";
import ScrollToTop from "react-scroll-to-top";

import styles from "./Home.module.scss";
import Header from "../../layouts/Header";
import SlideShow from "../../layouts/SlideShow";
import Content from "../../layouts/Content";
import Footer from "../../layouts/Footer";

const cx = classNames.bind(styles);

function Home() {
  return (
    <>
      <ScrollToTop smooth className={cx("scroll-top")} />
      <Header />
      <SlideShow />
      <Content />
      <Footer />
    </>
  );
}

export default Home;
