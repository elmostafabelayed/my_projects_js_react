const  Product=({props})=><>
<div className="card" style={{width :"19rem"}}>
  <img className="card-img-top h-50 col-4" src={`./image/${props.thumbnail}`} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Prix : {props.price}</p>
    <a href="#" className="btn btn-outline-secondary">Ajout</a>
  </div>
</div></>
// { id: 1, url: "",
// title: "Nature 1", category: "Nature" }

export default Product;