import useFetch from "../../hooks/useFetch";

import "./Slider.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import { reg } from "../../api/baseUrl";

const Slider = () => {
  const { data } = useFetch(reg.slider);

  //Swiper options
  const options = {
    navigation: true,
    pagination: true,
    speed: 800,
    loop: true,
  };

  return (
    <div className="slider">
      <Swiper
        {...options}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {data?.map(({ img, id }) => (
          <SwiperSlide key={id}>
            <img src={img} alt="slide-products" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
