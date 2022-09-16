import React from "react";
import "./LeftDetails.scss";

const Leftdetails = ({ product }) => {
  return (
    <div className="details__left">
      <div className="details__col">
        {product?.img.map((ele, i) => (
          <img src={ele} alt={product?.name} key={i} />
        ))}
      </div>

      <img src={product?.img[0]} alt="product" />
    </div>
  );
};

export default Leftdetails;
