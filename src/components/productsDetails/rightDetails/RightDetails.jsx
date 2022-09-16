import { useState } from "react";
import words from "../../../words";
import carimg from "../../../assests/Svg/vuesax-linear-group.svg";
import Rating from "../../../Rating";
import cubimg from "../../../assests/Svg/vuesax-linear-convert-3d-cube.svg";
import "../../../css/productsDetails/rightDetails/RightDetails.css";

const RightDetails = ({ product }) => {
  const [qty, setQty] = useState(1);

  const {
    payment,
    paymentBank,
    Memory,
    Color,
    insuranceArr,
    insurance,
    MemoryArr,
    productColor,
  } = words;

  const incress = () => {
    setQty(qty + 1);
  };

  const dicress = () => {
    setQty(qty - 1);
  };

  return (
    <div className="details__right">
      <div className="details__name">
        <h3>{product?.name}</h3>
      </div>

      <div className="details__rate">
        <Rating product={product} />
        <span>({product?.numberOfReviews} Reviews)</span>
      </div>

      <div className="details__moredetails">
        <div
          className={product?.inStock !== 0 ? "blueprice" : "details__price"}
        >
          <span>${product?.price}</span>
        </div>

        <div className={product?.inStock === 0 ? "out-of-stock" : "in-stock"}>
          <span>{product?.inStock !== 0 ? "inStock" : "outOfStock"}</span>
        </div>
      </div>

      <div className="details__qty">
        <span onClick={incress}>+</span>
        <span>{qty}</span>
        <span onClick={dicress}>-</span>
      </div>

      <div className="details__paymentsystem">
        {payment.map((ele, i) => (
          <span key={i}>{ele}</span>
        ))}
      </div>

      <div className="details__bank">
        {paymentBank.map((ele, i) => (
          <img src={ele} alt="Cib" key={i} />
        ))}
      </div>

      <div className="details__memory">
        <h3>{Memory}</h3>

        <div className="details__memory__content">
          {MemoryArr.map(({ price, size }, i) => (
            <div key={i}>
              <span>{size}</span>
              <span>{price}$</span>
            </div>
          ))}
        </div>
      </div>

      <div className="details__color">
        <h3>{Color}</h3>

        <div className="details__color__content">
          {productColor.map((ele, i) => (
            <div key={i}>
              <span>{ele}</span>
              <span></span>
            </div>
          ))}
        </div>
      </div>

      <div className="details__insurance">
        <h3>{insurance}</h3>
        <div className="details__insurance__content">
          {insuranceArr.map(({ price, year }, i) => (
            <div key={i}>
              <span>{year}</span>
              <span>{price}$</span>
            </div>
          ))}
        </div>
      </div>
      <button className={product?.inStock !== 0 && "blueBtn"}>
        Add to card
      </button>

      <div className="details__info">
        <div>
          <img src={carimg} alt="shipping" />
          <span>Free shipping, arrives by Tue, Nov 23</span>
        </div>

        <div>
          <img src={cubimg} alt="freedays" />
          <span>Free 10-day return window starts Dec 26th Details</span>
        </div>
      </div>
    </div>
  );
};

export default RightDetails;
