import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Recherche, resetRecherche } from "../features/stagiaireSlice";

export default function Navbar() {
    const [serch, setSerch] = useState('');
    const disp = useDispatch();
    
    // البحث المباشر كل ما تكتب
    function handleChange(e) {
        const val = e.target.value;
        setSerch(val);
        
        if (val.trim() === "") {
            disp(Recherche());
        } else {
            disp(Recherche(val));
        }
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Redux CRUD APP
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
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/stagiaires">
                                Liste des stagiaires
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/add">
                                Ajouter stagiaire
                            </Link>
                        </li>
                    </ul>

                    <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            onChange={handleChange}
                            value={serch}
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
}