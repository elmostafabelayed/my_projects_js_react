import { Route, Routes } from "react-router-dom";

import Home from "./composon/Home";
import Ajouter from "./composon/Ajout";
import List from "./composon/List";
import Navbar from "./composon/Navbar";
import { Provider } from "react-redux";
import Store from "./features/Store";
import Modification from "./composon/Modification";

export default function App() {
  return (
    <Provider store={Store}>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/stagiaires" element={<List></List>}></Route>
          <Route path="/add" element={<Ajouter></Ajouter>}></Route>
          <Route path="/edit/:id" element={<Modification></Modification>}></Route>
        </Routes>
      </div>
    </Provider>
  );
}
