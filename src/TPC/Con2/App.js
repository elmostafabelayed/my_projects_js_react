import React, { useState } from "react";
import AjouterFilm from "./AjouterFilm";
import ListeFilms from "./ListeFilms";
import { Route, Routes, Link } from "react-router-dom";

const App = () => {
  const [films, setFilm] = useState([
    {
      id: 1,
      titre: "Inception",
      realisateur: "Christopher Nolan",
      annee: 2010,
    },
    {
    id: 2,
      titre: "Parasite",
      realisateur: "Bong Joon-ho",
      annee: 2019,
    },
  ]);
  function AjouterFil(titre, réalisateur, année) {
    const nv = {
      id: Date.now(),
      titre: titre,
      realisateur: réalisateur,
      annee: Number(année),
    };
    setFilm([...films, nv]);
  }
  return (
    <div className="container text-center">
      <Link to={"/add"}>Ajouter Film</Link> {"   "}{" "}
      <Link to={"/"}>Liste Films</Link>
      <Routes>
        <Route
          path="/add"
          element={<AjouterFilm AjouterFil={AjouterFil}></AjouterFilm>}
        ></Route>
        <Route
          path="/"
          element={<ListeFilms film={films}></ListeFilms>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
