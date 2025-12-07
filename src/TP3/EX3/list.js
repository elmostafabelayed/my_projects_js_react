import { useState } from "react";
import personnel from "./data";
import Person from "./per";
export default function Masar(){
    const[index,setIndex]=useState(0);
 function point(i){
    if(i>=0 ){
        setIndex(i)
    }  }
    function suv(i){
        if(i !==personnel.length-1 )
            setIndex(i)
    }
 
    return <div>
        <Person p={personnel[index]}/>
        <button onClick={()=>setIndex(0)}>premir</button>
        <button onClick={()=>point(index-1)}>precedent</button>
        <button onClick={()=>suv(index+1)}>Suivent</button>
        <button onClick={()=>setIndex(personnel.length-1)}>Dern</button>
    </div>
}