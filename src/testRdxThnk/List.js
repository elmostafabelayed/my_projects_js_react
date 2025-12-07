import { useDispatch, useSelector } from "react-redux";
import { getUsers, viderList } from "./UserSlice";
export default function List() {
  const { loading, users, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div className="container text-center">
      <h1>Liste des utilisateurs</h1>
      <div className="m-3">
        <button
          className="btn btn-success m-2"
          onClick={() => dispatch(getUsers())}
        >
          {" "}
          Charger la liste des utilisateurs
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => dispatch(viderList())}
        >
          Vider la liste
        </button>
      </div>
      <div>{loading && <b>Chargement ....</b>}</div>
      {users && users.length != 0 ? (
        <table className="table table-bordered">
          <thead>
            {" "}
            <tr>
              {" "}
              <th>#</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Adresse</th>
              <th>Téléphone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.address.street},{user.address.city}
                </td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
