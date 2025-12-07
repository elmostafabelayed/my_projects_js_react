import React, { useState } from "react";
export default function Question({ question }) {
  const [des, setDes] = useState(false);
  const [styel, setStyel] = useState({ color: "" });
  const [mes, setMes] = useState("");
  function heldeer(el) {
    setDes(true);
    if (el === question.réponseCorrect) {
      setStyel({ color: "green" });
      setMes(`${el} est boon reponss`);
    } else {
      setStyel({ color: "red" });
      setMes(`${el} est mauvaise reponse`);
    }
  }
  return (
    <div>
      <h3>{question.enoncé}</h3>
      {question.options.map((el, i) => (
        <button key={i} onClick={() => heldeer(el)} disabled={des}>
          {el}
        </button>
      ))}
      <p style={styel}>{mes}</p>
    </div>
  );
}
