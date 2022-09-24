import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage = ({ ...rest }) => {
  return (
    <>
      <LazyLoadImage {...rest} effect="blur" />
    </>
  );
};

export default MyImage;
