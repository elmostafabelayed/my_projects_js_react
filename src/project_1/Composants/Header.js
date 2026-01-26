import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div>
          <ul className="navbar-nav mr-sm-2">
            <li className="nav-item active">
                <Link to={'/'} className="nav-link">Accueil <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/ajouter'}>
                            Ajouter new domande
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
