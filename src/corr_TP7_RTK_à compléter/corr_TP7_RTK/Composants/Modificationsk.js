import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { modifier } from "../tutoSlice";

export default function Modification() {
  const { id } = useParams();
  const list = useSelector((st) => st.tuto.liste);
  const find = list.find((e) => e.code == id);
  const dispatch = useDispatch();
  const [titre, setTitre] = useState(find.titre);
  const [description, setDescription] = useState(find.description);
  const nav = useNavigate();
  function handelSub(e) {
    e.preventDefault();
    if (titre == "" || description == "") {
      alert("champ vid");
    } else {
      dispatch(modifier({ id, titre, description }));
      setDescription("");
      setTitre("");
      nav("/", { state: { mes: "se modiiiidid" } });
    }
  }
  return (
    <div className="container">
      <h1>Mise a jour du Tuto {id} </h1>
      {console.log(find)}
      <form action="" onSubmit={handelSub}>
        Titre <br />
        <input
          onChange={(e) => setTitre(e.target.value)}
          class="form-control"
          type="text"
          value={titre}
          aria-label="default input example"
        />
        Description <br />
        <input
          onChange={(e) => setDescription(e.target.value)}
          class="form-control form-control-sm"
          type="text"
          value={description}
          aria-label=".form-control-sm example"
        />{" "}
        <br />
        <button className="btn btn-primary">Modification</button>
      </form>
    </div>
  );
}
