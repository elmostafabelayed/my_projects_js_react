import { useState } from "react";

export default function ListePersonnel({ liste }) {
  const [indice, setIndice] = useState(0);
  const [recherche, setRecherche] = useState("");

  function precedent() {
    if (indice !== 0) setIndice(indice - 1);
  }
  function suivant() {
    if (indice !== liste.length - 1) setIndice(indice + 1);
  }
  function handleSubmit(e) {
    e.preventDefault();

    const indiceTrouvé = liste.findIndex((pers) => pers.Matricule == recherche);
    if (indiceTrouvé >= 0) setIndice(indiceTrouvé);
    else alert("Matricule non trouvé!");
  }
  return (
    <div className="container text-center m-3">
      {/* <div>
        Choisissez un matricule :
        <select name="" id="" onChange={(e) => setIndice(e.target.value)}>
          {liste.map((per, i) => (
            <option value={i}>{per.Matricule}</option>
          ))}
        </select>
      </div> */}
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tapez un matricule"
            onChange={(e) => setRecherche(e.target.value)}
          />
          <button type="submit">Rechercher</button>
        </form>
      </div>
      Matricule: <strong>{liste[indice].Matricule}</strong> <br />
      Nom: <strong>{liste[indice].Nom}</strong>
      <br />
      Prénom: <strong>{liste[indice].Prenom}</strong>
      <br />
      Service: <strong>{liste[indice].Service}</strong>
      <br />
      <div>
        <button onClick={() => setIndice(0)}>Premier</button>
        <button onClick={() => precedent()}>Précédent</button>
        <button onClick={() => suivant()}>Suivant</button>
        <button onClick={() => setIndice(liste.length - 1)}>Dernier</button>
      </div>
    </div>
  );
}
