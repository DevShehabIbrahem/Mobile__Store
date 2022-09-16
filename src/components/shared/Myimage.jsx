import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage = ({ src, alt }) => {
  return (
    <>
      <LazyLoadImage
        alt={alt}
        src={src} // use normal <img> attributes as props
        effect="blur"
      />
    </>
  );
};

export default MyImage;
