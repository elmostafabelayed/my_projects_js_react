import { useEffect, useState } from "react";
import User from "./user";

export default function App() {
  const [id, setId] = useState(0);
  const [uti, setUtil] = useState([]);


 function handsyb(e){
    e.preventDefault()
if (id!==0){
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
 .then((response) => {
 return response.json();
 })
  .then((users) => {setUtil(users);});
    }else{
        alert('not found')
    }

 }
  return (
    <div>
      <form action="" onSubmit={handsyb}>
        <h1>Details utilisateur</h1>
        {console.log(uti)}
        donner le id :
        <input
          type="number"
          name=""
          id=""
          onChange={(e) => setId(e.target.value)}
        />
      </form>
      <User list={uti}></User>
    </div>
  );}