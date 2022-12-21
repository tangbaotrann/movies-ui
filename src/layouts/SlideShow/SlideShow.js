import classNames from "classnames/bind";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import styles from "./SlideShow.module.scss";
import images from "../../assests/images";
import Image from "../../components/Image";

const cx = classNames.bind(styles);

function SlideShow() {
  return (
    <div className="grid wide">
      <Slide>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <Image
                className={cx("image-slides")}
                src={image.url}
                alt="imageSlides"
              />
            </div>
          );
        })}
      </Slide>
    </div>
  );
}

export default SlideShow;
