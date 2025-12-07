import { useState } from "react"
import facss from "./data";
export default function Jous(){
 const [cont,setCont]=useState(0);
 const [face,setFace]=useState(1);
 const jj = facss.find((ind)=>ind.id===face)
  return (<div className="p-3 container text-center">
    <img src={`./faces/${jj.url}`} />
    <h2 className="p-1 m-1">Jeu de Dé</h2>
    <h4 className="p-1 m-1">face: {face}</h4>
    <h4 className="p-1 m-1">Nombre des : {cont}</h4>
    <button className="p-2 m-4" onClick={()=> {setCont(cont+1); setFace(Math.floor(Math.random()*6 + 1))}} disabled={face===3}>Jour</button>
    {face==3? <p>Bravo vous avez trouvez la face cachée…..</p>:""}
    </div>
)
}