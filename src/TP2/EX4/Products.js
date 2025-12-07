import Product from "./Product";
const  Products=({products})=>
<>
<div className="container d-flex gap-4 flex-wrap">{products.map((pr)=> <Product props={pr} />)}</div>
    
</>
export default Products;