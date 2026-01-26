import { useState } from "react";
import { useDispatch } from "react-redux";
import { Ajouter } from "../DemandeSlice";
import { useNavigate } from "react-router-dom";
export default function Ajoutet() {
  const dispatch = useDispatch();
  const [mat, setMat] = useState(null);
  const [nom, setNom] = useState(null);
  const [dated, setDateD] = useState(null);
  const [dater, setDateR] = useState(null);
  const nav=useNavigate();

  function handlesub(e) {
    e.preventDefault();
    if (dated < dater) {
      dispatch(
        Ajouter({
          id: Date.now(),
          matricule: mat,
          nom: nom,
          dateDepart: dated,
          dateRetour: dater,
          etat: "en cours",
        })
      );
      nav('/')
    } else {
      alert("hiiii");
    }
  }
  return (
    <div>
      <div class="container mt-4">
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-5">
            <div class="card shadow-sm">
              <div class="card-body p-3">
                <h6 class="mb-3">Nouvelle demande</h6>

                <form action="" onSubmit={handlesub}>
                  <div class="mb-2">
                    <label class="form-label">Matricule</label>
                    <input
                      class="form-control form-control-sm"
                      onChange={(e) => setMat(e.target.value)}
                    />
                  </div>

                  <div class="mb-2">
                    <label class="form-label">Nom</label>
                    <input
                      class="form-control form-control-sm"
                      onChange={(e) => setNom(e.target.value)}
                    />
                  </div>

                  <div class="mb-2">
                    <label class="form-label">Date de départ</label>
                    <input
                      type="date"
                      onChange={(e) => setDateD(e.target.value)}
                      class="form-control form-control-sm"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Date de retour</label>
                    <input
                      type="date"
                      onChange={(e) => setDateR(e.target.value)}
                      class="form-control form-control-sm"
                    />
                  </div>

                  <button class="btn btn-primary btn-sm w-100">Ajouter</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
