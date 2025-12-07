import { useState } from "react";
import { ajouter } from "./TacheSlice";
import { useDispatch } from "react-redux";

export default function NewTache() {
  const [description, setDescription] = useState("");
  const dispatch=useDispatch()
  function handleSubmit(e) {
    e.preventDefault();
    ;
    setDescription("");
  }
  return (
    <div>
      <form action={""} onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ajouter une tâche"
        />
        <button type="submit" onClick={()=>dispatch(ajouter(description))}>Ajouter</button>
      </form>
    </div>
  );
}
