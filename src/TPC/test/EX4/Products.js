import { Route, Routes } from "react-router-dom";
import Product from "./Product";

const Products = ({ products }) => (
  <>
  <h2 className="text-center mb-4 text-danger fw-bold">Lists des ordinateurs </h2>
    <div className="container d-flex gap-4 flex-wrap">
        
      {products.map((pr) => (
        <Product props={pr} />
      ))}
    </div>
   
  </>
);
export default Products;
