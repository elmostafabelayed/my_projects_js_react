import { Provider, useDispatch } from "react-redux";
import NotesList from "./composants/list";
import sotre from "./store";
import NoteDetails from "./composants/NoteDetails";
import Ajout from "./composants/Ajout";
import { Route, Routes } from "react-router-dom";
import { getNotes } from "./features/notes/notesthunks";
import { useEffect } from "react";
import Modification from "./composants/modification";
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="Add/" element={<Ajout></Ajout>}></Route>
        <Route path="/edit/:id" element={<Modification></Modification>}></Route>
        <Route
          path="/"
          element={
            <div className="d-flex">
              <NotesList></NotesList>
              <NoteDetails></NoteDetails>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}
