import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";
import Subscribe from "../components/Subscribe/Subscribe";

const Home = () => {
  //Waiting The data From apis

  return (
    <>
      <Slider />
      <Products />
      <Subscribe />
    </>
  );
};

export default Home;
