import { useState } from "react";
import ChercheBar from "./ChercheBar";
import ResultatList from "./ResultatList";
import { list } from "./data";
export default function App() {
  const [type, setType] = useState("");
  const [resultas, setResultas] = useState([]);
  function onChercheSubmitApp(ii) {
    
    setResultas(list.filter((item) => item.type.toUpperCase() == ii));
  }
  return (
    <div className="App">
      <h1>Composant App</h1>
      <ChercheBar onChercheSubmit={onChercheSubmitApp} />
      <div>
        <p>
          le type:{" "}
          <span style={{ color: "rgb(36,44,33)", fontWeight: "bold" }}>
            {" "}
            {type}
          </span>
        </p>
      </div>
      <ResultatList resultats={resultas} />
    </div>
  );
}
