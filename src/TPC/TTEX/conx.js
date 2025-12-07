import { useState } from "react";
import users from "./data";
export default function Test() {
  const [identifiant, setIdentifiant] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const [messagep, setMessagep] = useState("");
const [acc, setAcc] = useState(false);


  
  function handleSubmit(e) {
    e.preventDefault();
    let fin = users.find((e)=>e.identifiant ===identifiant)
     if (fin === undefined){
        setMessage ('undifiopnde');
        setMessagep('');
     }else if (fin.pass !== pass){
        setMessagep('undifinde')
        setMessage ('');
    }else(
        setAcc(true)
    )
  }
  
  return (
  <div>{acc?<div><h2>Accueil</h2>
    <p>{`Bonjour ${identifiant} `}</p>
        </div>:<div className=""> 
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="nom">Identifiant</label>
        <input
          type="text"
          onChange={(e) => setIdentifiant(e.target.value)}
        />
       
        <br />
         <p style={{color : 'red'}}>{message}</p>
        <label htmlFor="prenom">Pass</label>
       <input type="text"
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
         <p style={{color : 'red'}}>{messagep}</p>
        <button type="submit">Conection</button>
      </form>
      </div>}
     
       
    </div>
  );
}
