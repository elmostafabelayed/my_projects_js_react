import { useState } from "react";

export default function Crud() {
  const [description, setDescription] = useState("");
  const [taches, setTaches] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description.trim()) return;

    const nTach = {
      id: "ID" + Date.now(),
      description,
      termin: false,
    };
    setTaches([...taches, nTach]);
    setDescription("");
  }

  function Suprim(id) {
    setTaches(taches.filter((t) => t.id !== id));
  }

  function listhhh(id) {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, termin: !tache.termin } : tache
      )
    );
  }

  return (
    <div className="container">
      <h1>Gestion des Tâches</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ajouter une tâche"
        />
        <button type="submit">Ajouter</button>
      </form>

      <div>
        <ul>
          {taches.map((e) => (
            <p>
              <li key={e.id}>
                <input
                  type="checkbox"
                  checked={e.termin}
                  onChange={() => listhhh(e.id)}
                />{" "}
                {e.description}{" "}
                <button onClick={() => Suprim(e.id)}>Supprimer</button>
              </li>
            </p>
          ))}
        </ul>

        <div>
          <p>Tâches restantes : {taches.filter((e) => !e.termin).length}</p>
          <button onClick={() => setTaches(taches.filter((e) => !e.termin))}>
            Deleted All
          </button>
        </div>
      </div>
    </div>
  );
}
