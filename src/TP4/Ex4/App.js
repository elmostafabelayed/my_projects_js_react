import { useState } from "react";
import NewTache from "./NewTache";
import ListTaches from "./ListTaches";
export default function App() {
  const [taches, setTaches] = useState([]);
  function ajout(description) {
    const nTach = {
      id: "ID" + Date.now(),
      description: description,
      termin: false,
    };
    setTaches([...taches, nTach]);
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
      <NewTache ajout={ajout} />
      <ListTaches Suprim={Suprim} listhhh={listhhh} taches={taches} />
      <div>
        <p>Tâches restantes : {taches.filter((e) => !e.termin).length}</p>
        <button onClick={() => setTaches(taches.filter((e) => !e.termin))}>
          Deleted All
        </button>
      </div>
    </div>
  );
}
