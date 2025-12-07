import { useState } from "react";
import ChercheBar from "./ChercherBar";
import ResultatList from "./ResultatList";
import { Provider } from "react-redux";
import store from "./store";
export default function App() {
  return (
    <div className="App">
      <h1>Composant App</h1>
      <Provider store={store}>
        <ChercheBar  />
    </Provider>
      
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
