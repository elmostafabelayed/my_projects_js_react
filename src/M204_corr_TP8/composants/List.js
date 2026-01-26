import { useEffect, useState } from "react";
import { deleteStagiaire, getStagiaires } from "../features/ActionTunk";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Affichage from "./Affichage";

export default function List({ terme }) {
  const dispatch = useDispatch();
  const { list, loading, error, flag } = useSelector((st) => st.stg);
  const [niveau, setNiveau] = useState("tous");
  const [show, setShow] = useState(false);
  const [stgAffiché, setStgAffiché] = useState(null);

  useEffect(() => {
    dispatch(getStagiaires());
  }, [flag]);

  const filtredList = list.filter((stg) => {
    var test = true;
    if (terme !== "")
      test = stg.nom.toLowerCase().includes(terme.toLowerCase());
    if (niveau !== "tous") test = test && stg.niveau === niveau;
    return test;
  });
  return (
    <div>
      {show && (
        <Affichage
          show={show}
          close={() => setShow(false)}
          stg={stgAffiché}
        ></Affichage>
      )}
      {loading && <p style={{ fontWeight: "bold" }}>Chargement ...</p>}
      {error && (
        <p style={{ fontWeight: "bold", color: "red" }}>Erreur: {error}</p>
      )}
      {list.length === 0 ? (
        <p className="alert alert-warning">Aucun stagiaire n'est trouvé!</p>
      ) : (
        <div className="container text-center">
          <h2 className="my-5">Tous les stagiaires</h2>
          <div className="d-flex w-50 mx-auto gap-2 my-3">
            <input
              type="radio"
              name="niveau"
              id="all"
              defaultChecked="checked"
              onChange={(e) => {
                e.target.checked && setNiveau("tous");
              }}
            />
            <label htmlFor="all" className="ml-3">
              Tous
            </label>
            <input
              type="radio"
              name="niveau"
              id="ts"
              onChange={(e) => {
                e.target.checked && setNiveau("ts");
              }}
            />
            <label htmlFor="ts" className="ml-3">
              Technicien spécialisé
            </label>
            <input
              type="radio"
              name="niveau"
              id="t"
              onChange={(e) => {
                e.target.checked && setNiveau("t");
              }}
            />
            <label htmlFor="t" className="ml-3">
              Technicien
            </label>
          </div>
          <div className="d-flex gap-5 flex-wrap">
            {filtredList.map((stg) => (
              <div className="w-15 border border-2 p-4">
                <h4 className="text-center">{stg.nom}</h4>
                <p className="text-muted">
                  Email : {stg.email} <br />
                  Niveau : {stg.niveau}
                </p>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => {
                      setShow(true);
                      setStgAffiché(stg);
                    }}
                  >
                    Afficher
                  </button>
                  <Link
                    to={`/edit/${stg.id}`}
                    className="btn btn-outline-success"
                  >
                    Modifier
                  </Link>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      if (
                        window.confirm(
                          `Voulez vous supprimer le stgaiaire ${stg.nom}?`
                        )
                      )
                        dispatch(deleteStagiaire(stg.id));
                    }}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
