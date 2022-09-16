import { useState } from "react";

import Products from "../../components/Products/Products";
import "./ProductsDetails.scss";
import { useParams } from "react-router-dom";
import Usefetch from "../../hooks/useFetch";
import { reg } from "../../api/baseUrl";
import words from "../../words";
import Rating from "../../Rating";
import carimg from "../../assests/Svg/vuesax-linear-group.svg";
import cubimg from "../../assests/Svg/vuesax-linear-convert-3d-cube.svg";

const ProductsDetails = () => {
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
  console.log(payment);
  const [qty, setQty] = useState(1);
  const { data } = Usefetch(reg.products);

  //Dynamic id from details route
  const { id } = useParams();

  //object contains the prodcut details
  const product = data?.find((pro) => pro.id === id);

  console.log(product);
  const incress = () => {
    setQty(qty + 1);
  };

  const dicress = () => {
    setQty(qty - 1);
  };

  return (
    <div className="details">
      <div className="details__wrapper">
        <div className="details__left">
          <div className="details__col">
            {product?.img.map((ele, i) => (
              <img src={ele} alt={product?.name} key={i} />
            ))}
          </div>

          <img src={product?.img[0]} alt="product" />
        </div>

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
              className={
                product?.inStock !== 0 ? "blueprice" : "details__price"
              }
            >
              <span>${product?.price}</span>
            </div>

            <div
              className={product?.inStock === 0 ? "out-of-stock" : "in-stock"}
            >
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
      </div>

      <Products noTitle />
    </div>
  );
};

export default ProductsDetails;
