import { Link, Route, Routes } from "react-router-dom";
import List from "./list";
import Ajout from "./Ajout";
import { Provider } from "react-redux";
import store from "../store";
import Modification from "./Modification";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand">E-Learning</Link>

            <div id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to={"/"}>
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/add"}>
                    Nouveau tutoriel
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<List></List>}></Route>
          <Route path="/add" element={<Ajout></Ajout>}></Route>
          <Route path="/tuto/:id"
            element={<Modification></Modification>}
          ></Route>
        </Routes>
      </div>
    </Provider>
  );
}
