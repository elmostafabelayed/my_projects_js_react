import { useState } from "react";
export default function Test() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setMessage(`Bonjour ${nom} ${prenom}`);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          onChange={(e) => setNom(e.target.value.toUpperCase())}
        />
        <br />
        <label htmlFor="prenom">Prenom</label>
       <input type="text"
          onChange={(e) => setPrenom(e.target.value.toUpperCase())}
        />
        <br />
        <button type="submit">Envoyer</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
