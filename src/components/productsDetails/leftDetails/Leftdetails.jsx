import "../../../css/productsDetails/leftDetails/LeftDetails.css";
import Image from "../../Image";
import Spinner from "../../Spinner";

const Leftdetails = ({ product }) => {
  <Spinner />;
  return (
    <div className="details__left">
      <div className="details__col">
        {product?.img.map((ele, i) => (
          <Image src={ele} alt="product" key={i} />
        ))}
      </div>

      <Image src={product?.img[0]} alt="product" />
    </div>
  );
};

export default Leftdetails;
