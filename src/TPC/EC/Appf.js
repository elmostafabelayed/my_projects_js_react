import React, { useState } from "react";
export default function Compteur() {
  const [comp, setComp] = useState(0);
  function incrementer() {
    setComp(comp + 1);
  }
  function decrementer() {
    setComp(comp - 1);
  }

  return (
    <div>
      <p>
        compteur <span>{comp}</span>
      </p>
      <button onClick={() => incrementer()}>incrementer</button>
      <button onClick={() => decrementer()}>decrementer</button>
    </div>
  );
}