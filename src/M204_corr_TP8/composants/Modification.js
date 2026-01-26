import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateStagiaire } from "../features/ActionTunk";

export default function Modification() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const list = useSelector((st) => st.stg.list);
  const [msg, setMsg] = useState("");

  const found = list.find((stg) => stg.id == id);

  const [editedStg, setEditedStg] = useState(found);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      editedStg.nom !== "" &&
      editedStg.email !== "" &&
      editedStg.tel !== ""
    ) {
      dispatch(updateStagiaire(editedStg));
      navigate("/all");
    } else setMsg("Vous devez remplir tous les champs!");
  }
  return (
    <div className="container w-75 mx-auto">
      {found ? (
        <>
          <h2 className="my-5">Modifier le stagiaire numéro {editedStg.id}</h2>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="nomComplet" class="form-label">
                Nom complet
              </label>
              <input
                type="text"
                class="form-control"
                id="nomComplet"
                defaultValue={editedStg.nom}
                onChange={(e) =>
                  setEditedStg({ ...editedStg, nom: e.target.value })
                }
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                defaultValue={editedStg.email}
                onChange={(e) =>
                  setEditedStg({ ...editedStg, email: e.target.value })
                }
              />
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label">
                Téléphone
              </label>
              <input
                type="phone"
                class="form-control"
                id="tel"
                defaultValue={editedStg.tel}
                onChange={(e) =>
                  setEditedStg({ ...editedStg, tel: e.target.value })
                }
              />
            </div>
            <div class="mb-3">
              <label for="niveau" class="form-label">
                Niveau
              </label>
              <div class="form-check">
                <input
                  type="radio"
                  class="form-check-input"
                  id="t"
                  name="niveau"
                  defaultChecked={editedStg.niveau == "t" && "checked"}
                  onChange={(e) =>
                    e.target.checked &&
                    setEditedStg({ ...editedStg, niveau: "t" })
                  }
                />
                <label class="form-check-label" for="t">
                  Technicien
                </label>
              </div>
              <div class="form-check">
                <input
                  type="radio"
                  class="form-check-input"
                  id="ts"
                  name="niveau"
                  defaultChecked={editedStg.niveau == "ts" && "checked"}
                  onChange={(e) =>
                    e.target.checked &&
                    setEditedStg({ ...editedStg, niveau: "ts" })
                  }
                />
                <label class="form-check-label" for="ts">
                  Technicien spécialisé
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Enregistrer
            </button>
          </form>
          {msg && <p className="alert alert-danger">{msg}</p>}
        </>
      ) : (
        <p className="alert alert-warning">Aucun stagiaire n'est trouvé!</p>
      )}
    </div>
  );
}
