const  Cart=({props})=><>
<div className="card" style={{width :"19rem"}}>
  <img className="card-img-top h-50 col-4" src={`./imgcart/${props.url}`} alt={props.title}/>
  <div className="card-body">
    <h6 className="card-title">{props.title}</h6>
  </div>
</div></>
export default Cart;
