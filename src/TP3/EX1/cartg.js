import React, { useState } from "react";
import images from "./data";
import Cards from "./carts";
export default function Category() {
  const [cat, setCatp] = useState(images);
  function tout() {
    setCatp(images);
  }
  function filt(nomCategorie) {
    const resultat = images.filter((ct) => ct.category === nomCategorie);
    setCatp(resultat);
  }
  return (
    <div>
      <button onClick={() => tout()}>Tout</button>
      <button onClick={() => filt("Nature")}>Nature</button>
      <button onClick={() => filt("Villes")}>Villes</button>
      <button onClick={() => filt("Animaux")}>Animaux</button>
      <div>
        <Cards c={cat} />
      </div>
    </div>
  );
}
