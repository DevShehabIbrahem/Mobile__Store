import React from "react";

import words from "../../words";

import { reg } from "../../api/baseUrl";

import "./Products.scss";
import LargeScreen from "./largeprodcuts/LargeScreen";
import Mobilescreen from "./mobileProducts/Mobilescreen";
import Usefetch from "../../hooks/useFetch";

const Products = ({ noTitle }) => {
  const { data } = Usefetch(reg.products);

  const { exploreProducts } = words;

  return (
    <div className="products">
      {/* noTitle prop =>  for hide the products Title in Details page */}
      <h3>{!noTitle && exploreProducts}</h3>

      <LargeScreen data={data} />

      <Mobilescreen data={data} />
    </div>
  );
};

export default Products;
