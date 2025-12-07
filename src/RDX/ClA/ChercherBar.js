import React, { useState } from "react";
import { onChercheSubmitApp } from "./ListSlice";
import { useDispatch } from "react-redux";
export default function ChercheBar() {
  const [term, setTerm] = useState("");
  function onChercheSubmitBar(event) {
    event.preventDefault();
  }
  const dispatch = useDispatch();
  return (
    <div className="Child">
      <form onSubmit={(event) => onChercheSubmitBar(event)}>
        <h2>composant ChercheBar</h2>
        <div>
          <label>Entrer le mot clé de recherche:</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value.toUpperCase())}
          />
        </div>
        <button type="submit" onClick={dispatch(onChercheSubmitApp(term))}>
          chercher
        </button>
      </form>
    </div>
  );
}
