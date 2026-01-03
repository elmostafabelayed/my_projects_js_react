import { Provider } from "react-redux";
import store from "../store";
import Ajout from "./Ajout";
import List from "./Liste";
import {  Link, Route, Routes } from "react-router-dom";
import Modification from "./Modificationsk.js";
export default function App() {
  return (
    <div>
      
        <nav
          className="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              E-learning
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">
                    Nouveau tutoriel
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<List />}></Route>
            <Route path="/add" element={<Ajout />}></Route>
            <Route path="/edit/:id" element={<Modification/>}></Route>
          </Routes>
        </Provider>
    </div>
  );
}
