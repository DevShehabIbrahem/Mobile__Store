import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./LargeScreen.scss";
import { Navigation, Pagination } from "swiper";

import Product from "../Product/Product";

const LargeScreen = ({ data }) => {
  const options = {
    navigation: true,
    pagination: true,
    speed: 800,
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
  }; //Swiper options

  return (
    <div className="LargeScreen">
      <Swiper
        {...options}
        //breakpoints
        breakpoints={{
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {data?.map((product) => (
          <SwiperSlide key={product.id}>
            <Product {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LargeScreen;
