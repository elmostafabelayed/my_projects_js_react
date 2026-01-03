import { useDispatch, useSelector } from "react-redux";
import Recherch from "./Recherche";
import { Delete } from "../TutoSclice";
import Modification from "./Modification";
import { Link } from "react-router-dom";

export default function List() {
  const list = useSelector((state) => state.list.list);
  const dispatch = useDispatch();
  function det(e) {
    const del = window.confirm("do you want deleted " + e.code + " !!");
    if (del) {
      dispatch(Delete(e.code));
    }
  }
  return (
    <div className="container text-center">
      <h2>Liset des tutoriels</h2>
      <Recherch></Recherch>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Titre</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((e) => (
            <tr key={e.code}>
              <td>{e.code}</td>
              <td>{e.titre}</td>
              <td>{e.description}</td>
              <td>
                <button className="btn btn-danger" onClick={() => det(e)}>
                  Detelet
                </button>
                <Link to={`/tuto/${e.code}`}>
                  <button className="btn btn-warning">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
