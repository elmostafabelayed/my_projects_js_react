import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStagiaires,
  deletedStagiaire,
} from "../features/ActionThunk";
import { Link } from "react-router-dom";
import ExampleModal from "./Modal";

export default function List() {
  const dispatch = useDispatch();
  const {
    filteredData = [],
    loading,
    error,
  } = useSelector((state) => state.stagiaires);
  const [showModal, setShowModal] = useState(false);
  const [selectedStagiaire, setSelectedStagiaire] = useState(null);

  const handleShow = (stagiaire) => {
    setSelectedStagiaire(stagiaire);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const [filtre, setFiltre] = useState("all");

  useEffect(() => {
    dispatch(fetchStagiaires());
  }, [dispatch]);

  const stagiairesFiltres =
    filtre === "all" ? filteredData : filteredData.filter((s) => s.niveau === filtre);

  return (
    <>
      <ExampleModal
        show={showModal}
        handleClose={handleClose}
        stagiaire={selectedStagiaire}
      />

      <div className="container text-center">
        <h2 className="my-3">Tous les stagiaires</h2>

        <div className="mb-3 mx-3">
           <input
            type="radio"
            name="niveau"
            checked={filtre === "all"}
            onChange={() => setFiltre("all")}
          />{"  "}
          All{"  "}
          <input
            type="radio"
            name="niveau"
            onChange={() => setFiltre("ts")}
          />{"  "}
          Technicien Spécialisé{"  "}
          <input
            type="radio"
            name="niveau"
            onChange={() => setFiltre("t")}
          />{"  "}
          Technicien
        </div>

        {loading && <b>Chargement...</b>}
        {error && <p className="text-danger">{error}</p>}

        <div className="d-flex flex-wrap justify-content-center">
          {stagiairesFiltres.map((s) => (
            <div className="card m-2" style={{ width: "18rem" }} key={s.id}>
              <div className="card-body">
                <h5 className="card-title">{s.nom}</h5>
                <p className="card-text">{s.email}</p>
                <p className="card-text">
                  <strong>Niveau :</strong> {s.niveau=='ts'? 'Technicien Spécialisé':'Technicien'}
                </p>

                <button
                  className="btn btn-outline-primary m-1"
                  onClick={() => handleShow(s)}
                >
                  Afficher
                </button>

                <Link to={`/edit/${s.id}`}>
                  <button className="btn btn-outline-success m-1">
                    Modifier
                  </button>
                </Link>

                <button
                  className="btn btn-outline-danger m-1"
                  onClick={() => {
                    if (window.confirm(`Voulez-vous supprimer ${s.nom} ?`)) {
                      dispatch(deletedStagiaire(s.id));
                    }
                  }}
                >
                  Supprimer
                </button>{console.log(s.id)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
