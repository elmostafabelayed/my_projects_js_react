import { useState } from "react";
import produits from "./data";
import ListeProduit from "./ListeProduit";
import Panier from "./Pini";

export default function App() {
    const [panier, setPani] = useState([])
    function ajouterAuPanier(produit, qnt) {
        const op = panier.find(i => i.produit.référence === produit.référence);
        if (op) {
            op.qnt += Number(qnt);
            setPani([...panier]);
        } else {
            setPani([...panier, { produit, qnt: Number(qnt) }]);
        }

    }
    function SupprimePanier(id) {
        setPani(panier.filter(e => e.produit.référence !== id))
    }

    return (
        <div>
              <h1>Liste des produit</h1>
            <ListeProduit list={produits} ajouterAuPanier={ajouterAuPanier} />
            <Panier achats={panier} SupprimePanier={SupprimePanier} />
        </div>
    )
}