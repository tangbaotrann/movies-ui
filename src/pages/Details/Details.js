import { useSelector } from "react-redux";

import BackHomeIcon from "../../components/BackHomeIcon";
import Header from "../../layouts/Header";
import InfoDetail from "../../layouts/InfoDetail";
import { findByIdMovieSelector } from "../../redux/selector";

function Details() {
  const movie = useSelector(findByIdMovieSelector);

  return (
    <>
      <Header />
      <BackHomeIcon to="/" />
      <InfoDetail movie={movie} />
    </>
  );
}

export default Details;
