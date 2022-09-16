import Products from "../../components/Products/Products";
import "./ProductsDetails.scss";
import { useParams } from "react-router-dom";
import Usefetch from "../../hooks/useFetch";
import Leftdetails from "../../components/productsDetails/leftDetails/Leftdetails";
import RightDetails from "../../components/productsDetails/rightDetails/RightDetails";
import { reg } from "../../api/Reguest";

const ProductsDetails = () => {
  const { data } = Usefetch(reg.products);

  //Dynamic id from details route
  const { id } = useParams();

  //object contains the prodcut details
  const product = data?.find((pro) => pro.id === id);

  return (
    <div className="details">
      <div className="details__wrapper">
        <Leftdetails product={product} />

        <RightDetails product={product} />
      </div>

      <Products noTitle />
    </div>
  );
};

export default ProductsDetails;
