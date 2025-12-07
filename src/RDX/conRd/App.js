import { useState } from "react";
import NewTache from "./NewTache";
import ListTaches from "./ListTaches";
import { Provider } from "react-redux";
import store from "./store";
export default function App() {
  const [taches, setTaches] = useState([]);
  
  // function Suprim(id) {
  //   setTaches(taches.filter((t) => t.id !== id));
  // }

  // // function listhhh(id) {
  // //   setTaches(
  // //     taches.map((tache) =>
  // //       tache.id === id ? { ...tache, termin: !tache.termin } : tache
  // //     )
  // //   );
  // // }
  return (
    <Provider store={store}>
    <div className="container">
      <h1>Gestion des Tâches</h1>
      
      <NewTache  />
      <ListTaches  />
      {/* <div>
        <p>Tâches restantes : {taches.filter((e) => !e.termin).length}</p>
        <button onClick={() => setTaches(taches.filter((e) => !e.termin))}>
          Deleted All
        </button>
      </div> */}
    </div></Provider>
  );
}
