import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductsDetails from "./Pages/ProductsDetails/ProductsDetails";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { reg } from "./api/baseUrl";

import Usefetch from "./hooks/useFetch";
import Spinner from "./components/Spinner";

function App() {
  const { loading } = Usefetch(reg.products);

  if (loading) return <Spinner />;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/product/:id" element={<ProductsDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
