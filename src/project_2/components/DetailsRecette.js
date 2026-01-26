import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { supprimerRecette, toggleFavori } from "../store/recetteSlice";

const DetailsRecette = () => {
    const nav =useNavigate()
    const {id} =useParams();
    const list = useSelector((state) => state.recett.recettes);
    const found =list.find(e=>e.id==id);
    const dispatch = useDispatch();
    function Suprim(){
       if (window.confirm('wach baghit tm7ih'))
        {dispatch(supprimerRecette({id:found.id}));
       nav('/')
    }
    }
    if (!found) {
  return null; 
}

  return (
    <div className="container mt-4">
     
      <button onClick={()=>nav('/')} className="btn btn-link mb-3 p-0">
        ← Retour à la liste
      </button>

      <h2 className="fw-bold">{found.titre}</h2>

      <div className="d-flex align-items-center gap-2 mb-3">
        <span className="badge bg-primary">{found.catégorie}</span>
        <span className="badge bg-success">{found.difficulté}</span>
        <span className="text-muted ms-2">{found.tempsPrepa} min</span>
        <span className="text-muted">Créée le {found.dateCréation}</span>
      </div>

      <div className="card mb-3">
        <div className="card-header fw-semibold">
          Ingrédients
        </div>
        <ul className="list-group list-group-flush">
            {found.ingrédients.map((e,i)=>
            <li className="list-group-item" key={i}>{e}</li>)}
          
        </ul>
      </div>
      <div className="d-flex gap-2">
        { found.favori==false?<button onClick={()=>dispatch(toggleFavori({Etat:true,id:found.id}))} className="btn btn-outline-warning">
          Ajouter aux favoris
        </button>:
        <button className="btn btn-outline-warning" onClick={()=>dispatch(toggleFavori({Etat:false,id:found.id}))} >
          Retire aux favoris
        </button>}
        <button className="btn btn-outline-danger" onClick={()=>Suprim()}>
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default DetailsRecette;
