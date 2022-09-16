import React from "react";
import "../../../css/productsDetails/leftDetails/LeftDetails.css";
import MyImage from "../../shared/MyImage";
import ErrorImage from "../../../assests/Error.jpg";

const Leftdetails = ({ product }) => {
  return (
    <div className="details__left">
      <div className="details__col">
        {product?.img.map((ele, i) => (
          <MyImage src={ele} alt={product?.name} key={i} />
        ))}
      </div>

      <MyImage src={product?.img[0]} alt="product" />
    </div>
  );
};

export default Leftdetails;
