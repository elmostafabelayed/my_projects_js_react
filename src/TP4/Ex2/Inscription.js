import { useState } from "react";

export default function Inscription() {
  const [nom, setNom] = useState("");
  const [age, setAge] = useState(0);
  const [sexe, setSexe] = useState("");
  const [pays, setPays] = useState("");
  const [interets, setInterets] = useState([]);
  const [resultat, setResultat] = useState(false);

  function handleRadio(e) {
    if (e.target.checked) setSexe(e.target.value);
  }
  function handleInterets(e) {
    if (e.target.checked) setInterets([...interets, e.target.value]);
    else setInterets(interets.filter((int) => int !== e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // setMessage(`Bonjour ${nom}, Age: ${age} ans, ${pronom} est de ${pays} `);

    setResultat(true);
  }

  function Message() {
    const pronom = sexe === "Homme" ? "Il" : "Elle";
    return (
      <div>
        Bonjour <strong>{nom}</strong>, Age : <strong>{age}</strong>
        <br />
        {pronom} est de : <strong>{pays}.</strong>
        {interets.length === 0 ? (
          <span> {pronom} n'a pas d'intérêts!</span>
        ) : (
          <ul>
            Ses intérets sont :
            {interets.map((int, i) => (
              <li key={i}>{int}</li>
            ))}{" "}
          </ul>
        )}
      </div>
    );
  }
  return (
    <div className="container ml-3">
      {console.log(interets)}
      <h2>Inscription</h2>

      <form action="" onSubmit={handleSubmit}>
        <label>Nom et prenom :</label>
        <br />
        <input type="text" onChange={(e) => setNom(e.target.value)} />
        <br />
        <br />
        <label>Age :</label>
        <br />
        <input type="number" onChange={(e) => setAge(e.target.value)} />
        <br />
        <br />
        <label>Sexe</label>
        <br />
        <input
          type="radio"
          name="sexe"
          value="Homme"
          onChange={handleRadio}
        />{" "}
        Homme
        <input
          type="radio"
          name="sexe"
          value="Femme"
          onChange={handleRadio}
        />{" "}
        Femme
        <br />
        <br />
        <label>pays</label>
        <br />
        <select onChange={(e) => setPays(e.target.value)}>
          <option value="">--Choisir--</option>
          <option value="Maroc">Maroc</option>
          <option value="France">France</option>
          <option value="Espagne">Espagne</option>
        </select>
        <br />
        <br />
        <label>Intêrets :</label>
        <br />
        <input type="checkbox" value="Lecture" onChange={handleInterets} />{" "}
        Lecture
        <input type="checkbox" value="cinema" onChange={handleInterets} />{" "}
        cinema
        <input type="checkbox" value="Sports" onChange={handleInterets} />{" "}
        Sports
        <br />
        <br />
        <button type="submit">Afficher</button>
      </form>
      {resultat && <>{Message()}</>}
    </div>
  );
}
