import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { modifier } from "../tutoSlice";

export default function Modification() {
  const { code } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const liste = useSelector((st) => st.tuto.liste);
  const found = liste.find((t) => t.code == code);
  const [editedTuto, setEditedTuto] = useState(found);
  function handleSubmit(e) {
    e.preventDefault();
    if (editedTuto.titre !== "" && editedTuto.description !== "") {
      dispatch(modifier(editedTuto));
      navigate("/", { state: { message: "Modification réussie" } });
    }
  }
  return (
    <div className="container w-75 my-5">
      {console.log(editedTuto)}
      {found ? (
        <div>
          <h2>Modifier le tutoriel numéro : {code}</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="code" className="form-label">
                Code
              </label>
              <input
                type="text"
                className="form-control"
                id="code"
                disabled
                defaultValue={found.code}
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
                defaultValue={found.titre}
                onChange={(e) =>
                  setEditedTuto({ ...editedTuto, titre: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                defaultValue={found.description}
                onChange={(e) =>
                  setEditedTuto({ ...editedTuto, description: e.target.value })
                }
              ></textarea>
            </div>
            <button className="btn btn-primary">Enregistrer</button>
          </form>
        </div>
      ) : (
        <p>Aucun tutoriel n'est trouvé</p>
      )}
    </div>
  );
}
