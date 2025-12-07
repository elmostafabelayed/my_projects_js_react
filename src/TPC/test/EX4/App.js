import { Route, Routes } from "react-router-dom";
import products from "./data";
import Products from "./Products";
import Prd from "./prd";

export default function App(){
    return <div className="container mt-4 p-4 shadow rounded bg-light "> 
    
     <Routes>
      <Route path="/prod/:id" element={<Prd />}></Route>
      <Route path="/"  element={<Products products={products} />}></Route>
    </Routes>
    </div>
}