import { useState } from "react";

export default function NewTache({ ajout }) {
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    ajout(description);
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
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
