import React from "react";
import "../../../css/productsDetails/leftDetails/LeftDetails.css";
import MyImage from "../../shared/MyImage";
import Spinner from "../../Spinner";

const Leftdetails = ({ product }) => {
  <Spinner />;
  return (
    <div className="details__left">
      <div className="details__col">
        {product?.img.map((ele, i) => (
          <MyImage src={ele} alt="product" key={i} />
        ))}
      </div>

      <MyImage src={product?.img[0]} alt="product" />
    </div>
  );
};

export default Leftdetails;
