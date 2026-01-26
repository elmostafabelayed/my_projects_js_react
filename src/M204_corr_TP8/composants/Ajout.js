import { useState } from "react";
import { useDispatch } from "react-redux";
import { createStagiaire } from "../features/ActionTunk";
import { useNavigate } from "react-router-dom";

export default function Ajout() {
  const [nvStg, setNvStg] = useState({
    nom: "",
    email: "",
    tel: "",
    niveau: "t",
  });
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (nvStg.nom !== "" && nvStg.email !== "" && nvStg.tel !== "") {
      dispatch(createStagiaire(nvStg));
      navigate("/all");
    } else setMsg("Vous devez remplir tous les champs!");
  }
  return (
    <div className="container w-75 mx-auto">
      <h2 className="my-5">Nouveau stagiaire</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="nomComplet" class="form-label">
            Nom complet
          </label>
          <input
            type="text"
            class="form-control"
            id="nomComplet"
            onChange={(e) => setNvStg({ ...nvStg, nom: e.target.value })}
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
            onChange={(e) => setNvStg({ ...nvStg, email: e.target.value })}
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
            onChange={(e) => setNvStg({ ...nvStg, tel: e.target.value })}
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
              defaultChecked="checked"
              onChange={(e) =>
                e.target.checked && setNvStg({ ...nvStg, niveau: "t" })
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
              onChange={(e) =>
                e.target.checked && setNvStg({ ...nvStg, niveau: "ts" })
              }
            />
            <label class="form-check-label" for="ts">
              Technicien spécialisé
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Ajouter
        </button>
      </form>
      {msg && <p className="alert alert-danger">{msg}</p>}
    </div>
  );
}
