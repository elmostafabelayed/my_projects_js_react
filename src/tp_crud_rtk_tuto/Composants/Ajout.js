import { useState } from "react";
import { useDispatch } from "react-redux";
import { Ajoutk } from "../TutoSclice";

export default function Ajout() {
    const dispatch= useDispatch()
    const [code,setCode]=useState('');
    const [titre,setTitre]=useState('');
    const [description,setDescription]=useState('');

function handelSub(e){
    e.preventDefault();
    if (code =='' || titre =='' || description == ''){
        alert('champ vid')
    }else{
        dispatch(Ajoutk({code,titre,description}))
        setCode('');
        setDescription('');
        setTitre('')
    }

}
  return (
    <div className="container">
      <h1>Nouveau Tutoriel</h1>
      <form action="" onSubmit={handelSub}>
        Code <br />
        <input onChange={(e)=>setCode(e.target.value)}
          className="form-control form-control-lg"
          type="text" value={code}
          aria-label=".form-control-lg example"
        />
        Titre <br />
        <input onChange={(e)=>setTitre(e.target.value)}
          class="form-control"
          type="text" value={titre}
          aria-label="default input example"
        />
        Description <br />
        <input onChange={(e)=>setDescription(e.target.value)}
          class="form-control form-control-sm"
          type="text" value={description}
          aria-label=".form-control-sm example"
        />{" "}
        <br />
        <button className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}
