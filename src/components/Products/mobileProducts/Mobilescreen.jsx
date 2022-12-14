import Product from "../Product/Product";
import "../../../css/Products/mobileProducts/mobileScreen.css";

const Mobilescreen = ({ data }) => {
  return (
    <div className="mobilescreen">
      <div className="mobilescreen__wrraper">
        {data?.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Mobilescreen;
