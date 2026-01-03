import { useSelector, useDispatch } from "react-redux";
export default function Compteur() {
  const compt = useSelector((state) => state.compteur);
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <h2>{compt}</h2>
      <br />
      
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Incrémenter
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Décrémenter
      </button>
    </div>
  );
}
