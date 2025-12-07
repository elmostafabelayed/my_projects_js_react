import Cart from "./cart";

const  Cards=({c})=>
<>
<div className="container d-flex gap-4 flex-wrap">{c.map((pr)=> <Cart props={pr} />)}</div>
    </>
export default Cards;