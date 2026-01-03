import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifiStagiaire } from "../features/ActionThunk";
import { data, useParams } from "react-router-dom";

export default function Modification() {
    const {id}=useParams()
      const {
    filteredData  = [],
  } = useSelector((state) => state.stagiaires);
  const el = filteredData.find((e)=>e.id==id)
  const dispatch = useDispatch();
  const [nom, setNom] = useState(el.nom);
  const [email, setEmail] = useState(el.email);
  const [tel, setTel] = useState(el.tel);
  const [redi, setRadi] = useState(el.niveau);

  function handelSub(e) {
    e.preventDefault();
    if (nom == "" || email == "" || tel == "") {
      alert("champ vid");
    } else {
      dispatch(
        modifiStagiaire({
          id: id,
          nom: nom,
          email: email,
          tel: tel,
          niveau: redi,
        })
      );
      setNom("");
      setEmail("");
      setTel("");
    }
  }
  return (
    <div className="container">
      <h1 className=" text-center">Modifier les information d'un stagiare</h1>
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
            checked={redi=='ts'}
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
            checked={redi=='t'}
          />
          <label class="form-check-label" for="radioDefault2">
            Technicien
          </label>
        </div>
        <button className="btn btn-primary">Modifi</button>
      </form>
      {console.log(el)}
    </div>
  );
}
