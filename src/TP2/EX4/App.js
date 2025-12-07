import products from "./data";
import Products from "./Products";

export default function App(){
    return <div className="container mt-4 p-4 shadow rounded bg-light "> 
    <h2 className="text-center mb-4 text-danger fw-bold">Lists des ordinateurs </h2>
    <Products products={products}/>
    </div>
}