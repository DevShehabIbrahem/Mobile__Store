import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../css/Products/largeprodcuts/LargeScreen.css";
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
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
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
