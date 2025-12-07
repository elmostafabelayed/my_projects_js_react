import { useState } from "react";

export default function FormNew({ajout}){
    const [num,setNum]=useState(0);
    const [inti,setInti]=useState('');
    function handleSub(e){
        e.preventDefault();
        ajout(num,inti);

    }
   return (
        <form  onSubmit={handleSub}>
           Numero : <input type="number" name="" id="" onChange={(e)=>setNum(e.target.value)} /> <br />
           Intitule : <input type="text" onChange={(e)=>setInti(e.target.value)}/> <br/>
           <input type="submit" value="Nouvel ordinateur"/>
        </form>
    )
}