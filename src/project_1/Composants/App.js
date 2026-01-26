import { Provider } from "react-redux";
import List from "./List";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Ajoutet from "./Ajouter";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<List></List>}></Route>
        <Route path="/ajouter" element={<Ajoutet></Ajoutet>}></Route>
      </Routes>
    </div>
  );
}
