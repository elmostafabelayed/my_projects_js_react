import { useState } from "react";
import { useDispatch } from "react-redux";
import { Recherche } from "../TutoSclice";

export default function Recherch(){
   const dispatch =useDispatch()
    const [inpt,setInp]=useState('')
function handlsub(e){
    e.preventDefault();
    dispatch(Recherche(inpt))
}
  return (
    <div>
      <form action="" onSubmit={handlsub}>
        <input
          class="form-control"
          type="text"
          value={inpt} onChange={(e)=>setInp(e.target.value)}
          placeholder="Chercher par titre"
          aria-label="default input example"
        /><button className="btn btn-primary">Recherch</button>
      </form>
    </div>
  );
}
