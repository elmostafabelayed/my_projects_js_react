import { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar({ setTerme }) {
  const list = useSelector((st) => st.stg.list);
  const search = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    if (search != "") setTerme(search.current.value);
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ReduxCRUD APP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Nouveau stagiaire
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/all">
                Tous les stagiaires
                {list.length !== 0 && <span> ({list.length})</span>}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={search}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
