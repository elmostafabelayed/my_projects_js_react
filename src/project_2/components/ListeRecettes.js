import { useSelector } from "react-redux";
import CartRecette from "./CarteRecette";
import { useState } from "react";

export default function ListeRecettes() {
    const list = useSelector((state) => state.recett.recettes);
    const [listfel,setListf]=useState('Toutes')
    const listfil = list.filter(e=> listfel === "Toutes"
      ? true
      :  e.difficulté.toLowerCase().includes(listfel.toLowerCase()))
    return (
        <div className="container mt-4">
            <div className="container mb-3 text-center">
                
                <strong>Filtre par difficulté : </strong>  <input type="radio" checked={listfel === "Toutes"}  onChange={() => setListf('Toutes')} name="list" /> Toutes <input type="radio"onChange={() => setListf('Facile')} name="list" /> Facile <input type="radio" onChange={() => setListf('Moyen')} name="list" /> Moyen <input type="radio"onChange={() => setListf('Difficile')} name="list" /> Difficile
            </div>
            <div className="row">
                {listfil.map((el) => (
                    <div key={el.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                        <CartRecette props={el} />
                    </div>
                ))}
                
            </div>
        </div>
    );
}
