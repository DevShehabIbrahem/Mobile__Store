import { useNavigate } from "react-router-dom";
import words from "../../../words";
import "../../../css/Products/Product/Product.css";
import MyImage from "../../MyImage";
import ErrorImage from "../../../assests/Error.jpg";

const Product = ({ name, img, price, inStock, priceAfterdiscount, id }) => {
  const Navigate = useNavigate();

  const { In_Stock, out_of_stock } = words;

  //Function for Navigate To ProductsDetails
  const NavigateToDetails = (id) => {
    if (id) Navigate(`/product/${id}`);
  };

  return (
    <div className="product__cart" onClick={() => NavigateToDetails(id)}>
      <div className="product__img">
        <MyImage src={img[0] ? img[0] : ErrorImage} alt="product-images" />
      </div>

      <div className="product__cart__bottom">
        <div className="product__cart__title">
          <h4>{name}</h4>
        </div>

        <div className="product__cart__info">
          <div>
            <div
              className={
                price !== priceAfterdiscount
                  ? "product__cart__price"
                  : "no_discount"
              }
            >
              <span>
                {price === priceAfterdiscount ? price : priceAfterdiscount}$
              </span>
            </div>

            <div className="product__cart__stock">
              <span className={inStock === 0 ? "out-of-stock" : "in-stock"}>
                {inStock === 0 ? out_of_stock : In_Stock}
              </span>
            </div>
          </div>

          {priceAfterdiscount !== price && (
            <div className="product__cart__discond">
              <span>{price !== priceAfterdiscount && price}$</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
