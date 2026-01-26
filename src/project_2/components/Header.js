import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={'/'} className="navbar-brand" href="#">
          Mon Carnet de recettes
        </Link>
       
      </nav>
    </div>
  );
}
