import { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouter } from "../tutoSlice";
import { useNavigate } from "react-router";

export default function Ajout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tutoriel, setTutoriel] = useState({
    code: "",
    titre: "",
    description: "",
  });
  function handleChange(e) {
    setTutoriel({ ...tutoriel, [e.target.id]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    
    dispatch(ajouter(tutoriel));
    navigate("/");
  }
  return (
    <div className="container w-75 mt-3">
      {console.log(tutoriel)}
      <h2 className="my-4">Nouveau tutoriel</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="code" className="form-label">
            Code
          </label>
          <input
            type="text"
            className="form-control"
            id="code"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">
            Titre
          </label>
          <input
            type="text"
            className="form-control"
            id="titre"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}
