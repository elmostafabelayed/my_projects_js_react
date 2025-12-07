import { useDispatch, useSelector } from "react-redux";
import Recherch from "./Recherche";
import { Delete } from "../TutoSclice";

export default function List() {
  const list = useSelector((state) => state.list.list);
  const dispatch=useDispatch()
  return (
    <div className="container text-center">
        <h2>Liset  des tutoriels</h2>
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
          {list.map((e) => <tr key={e.code}>
              <td>{e.code}</td>
              <td>{e.titre}</td>
              <td>{e.description}</td>
              <td><button className="btn btn-danger" onClick={()=>dispatch(Delete(e.code))}>x</button><button className="btn btn-warning">edi</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
