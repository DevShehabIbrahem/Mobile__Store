import { Products, Slider, Subscribe } from "../components";
import Spinner from "../components/Spinner";
import Usefetch from "../hooks/useFetch";

const Home = () => {
  return (
    <>
      <Slider />
      <Products />
      <Subscribe />
    </>
  );
};

export default Home;
