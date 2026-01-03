import { useDispatch, useSelector } from "react-redux";
import Rechercher from "./Recherche";
import { useState } from "react";
import { Pen, Trash3Fill } from "react-bootstrap-icons";
import { supprimer } from "../tutoSlice";
import { Link, useLocation } from "react-router";

export default function List() {
  const dispatch = useDispatch();
  const location = useLocation();
  const message = location.state && location.state.message;
  
  const liste = useSelector((st) => st.tuto.liste);
  const [terme, setTerme] = useState("");
  const filtredTuto = liste.filter(
    (tuto) =>
      tuto.titre.toLowerCase().includes(terme.toLowerCase()) ||
      tuto.description.toLowerCase().includes(terme.toLowerCase())
  );

  function handleDelete(tuto) {
    if (window.confirm(`Voulez vous supprimer ${tuto.titre}?`))
      dispatch(supprimer(tuto.code));
  }
  return (
    <div className="container w-75">
      <h2 className="text-center my-5">Gestion des tutoriels</h2>
      {message && <p className="alert alert-success">{message}</p>}
      <Rechercher setTerme={setTerme}></Rechercher>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>Code</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtredTuto.map((tuto) => (
            <tr key={tuto.code}>
              <td>{tuto.code}</td>
              <td>{tuto.titre}</td>
              <td>{tuto.description}</td>
              <td>
                <Link to={`/tuto/${tuto.code}`}>
                  <Pen></Pen>
                </Link>
                <button onClick={() => handleDelete(tuto)} className="btn">
                  <Trash3Fill style={{ color: "red" }}></Trash3Fill>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
