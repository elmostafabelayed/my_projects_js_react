import Produit from "./produit";
export default function ListeProduit({list,ajouterAuPanier}){
    return (<div className="container d-flex m-2 ">
        {list.map(p=><Produit key={p.référence} ajouterAuPanier={ajouterAuPanier} produit={p}/>)}
        </div>)
}