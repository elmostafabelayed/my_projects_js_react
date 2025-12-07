import { Link, useParams } from "react-router-dom";
import products from "./data";
 export default function Prd() {
 const { id } = useParams();
 const f=products.find((r)=>r.id==id);

 return (
 <div>
  <h1>{f.title}</h1>
   <img className="h-50 col-4" src={`/image/${f.thumbnail}`} alt="Card image cap"/>
   <p>{f.price}</p>
   <Link to='/'>Aller vers la page d'accue</Link>
 </div>
 );
 }