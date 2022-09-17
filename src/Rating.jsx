import React from "react";
import { DynamicStar } from "react-dynamic-star";

const Rating = ({ Stars }) => {
  return (
    <DynamicStar
      rating={Stars}
      // emptyStarColor={product?.numberOfStars - 5}
      width={21.69}
      height={20.74}
      outlined="#AAAAAA"
      fullStarColor="#FFBC00"
      emptyStarColor="transparent"
    />
  );
};

export default Rating;
