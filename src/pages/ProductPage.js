import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const ProductsPage = ({ match }) => {
  return (
    <>
      <h2>Product page</h2>
      <Product id={match.params.id} />
      <Link to="/products">Back</Link>
    </>
  );
};

export default ProductsPage;
