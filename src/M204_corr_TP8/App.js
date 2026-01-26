import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./features/Store";
import Home from "./composants/Home";
import List from "./composants/List";
import Ajout from "./composants/Ajout";
import Modification from "./composants/Modification";
import { Provider } from "react-redux";
import NavBar from "./composants/NavBar";
import { useState } from "react";

export default function App() {
  const [terme, setTerme] = useState("");
  return (
    <div className="container">
      <Provider store={Store}>
        <BrowserRouter>
          <NavBar setTerme={setTerme}></NavBar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/all" element={<List terme={terme}></List>}></Route>
            <Route path="/create" element={<Ajout></Ajout>}></Route>
            <Route path="/edit/:id" element={<Modification />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
