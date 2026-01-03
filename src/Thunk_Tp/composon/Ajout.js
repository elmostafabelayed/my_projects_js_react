import { useState } from "react";
import { useDispatch } from "react-redux";
import { createStagiaire, } from "../features/ActionThunk";
import { useNavigate } from "react-router-dom";

export default function Ajouter() {
 const nav =useNavigate();
  const dispatch = useDispatch();
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [redi, setRadi] = useState("");

  function handelSub(e) {
    e.preventDefault();
    if (nom == "" || email == "" || tel == "") {
      alert("champ vid");
    } else {
      dispatch(
        createStagiaire({
          id: 'ID_'+Date.now(),
          nom: nom,
          email: email,
          tel: tel,
          niveau: redi,
        })
      );
      nav('/stagiaires')
      setNom("");
      setEmail("");
      setTel("");
    }
  }
  return (
    <div className="container">
      <h1 className=" text-center">Ajouter un nouveau stagiare</h1>
      <form action="" onSubmit={handelSub}>
        Nom complet <br />
        <input
          onChange={(e) => setNom(e.target.value)}
          className="form-control form-control-sm"
          type="text"
          placeholder="Entrez le Nom complet "
          value={nom}
          aria-label=".form-control-lg example"
        />
        Email <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          class="form-control form-control-sm"
          type="email"
          placeholder="Entrez votre email "
          value={email}
          aria-label="default input example"
        />
        Telephone <br />
        <input
          onChange={(e) => setTel(e.target.value)}
          class="form-control form-control-sm"
          type="tel"
          placeholder="Entrez votre telephone"
          value={tel}
          aria-label=".form-control-sm example"
        />{" "}
        <br />
        <div class="form-check">
          <input onChange={()=>setRadi('ts')}
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault1"
          />
          <label class="form-check-label" for="radioDefault1">
           Technicien Specialise
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault2"
            onChange={()=>setRadi('t')}
            
          />
          <label class="form-check-label" for="radioDefault2">
            Technicien
          </label>
        </div>
        <button className="btn btn-primary">Ajouter</button>
      </form>
      {console.log(redi)}
    </div>
  );
}
