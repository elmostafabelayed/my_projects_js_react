import { Link } from "react-router-dom";

export default function CartRecette({ props }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">
          {props.titre} {props.favori ? <span className="star">⭐</span> : ''}
        </h5>
        <p className="card-text mb-1">
          <strong>{props.catégorie}</strong> · {props.tempsPrepa} min
        </p>
        <p className="card-text mb-1">Difficulté : {props.difficulté}</p>
        <p className="card-text mb-3">
          Nombre d'ingrédients : {props.ingrédients.length}
        </p>
        <Link to={`/recette/${props.id}`} className="btn btn-primary">
          Voir
        </Link>
      </div>
    </div>
  );
}
