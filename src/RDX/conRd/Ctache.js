import { useDispatch } from "react-redux";
import { changerEtat, Supprimer } from "./TacheSlice";

export default function Ctache({ props, Suprim, listhhh }) {
  const dispatch=useDispatch()
  return (
    <>
      <div key={props.id}>
        <input
          type="checkbox"
          checked={props.termin}
          onChange={() =>dispatch(changerEtat(props.id)) }
        />
        {props.description}
        <button onClick={() => dispatch(Supprimer(props.id))}>Supprimer</button>
      </div>
    </>
  );
}
