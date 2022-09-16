import "./App.css";
import { Home, ProductsDetails, Navbar, Footer } from "./components";
import { Routes, Route } from "react-router-dom";



import Usefetch from "./hooks/useFetch";
import Spinner from "./components/Spinner";
import { reg } from "./api/Reguest";

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
