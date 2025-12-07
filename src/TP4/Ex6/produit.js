import { useState } from "react"

export default function Produit({ produit, ajouterAuPanier }) 
 {
    const [inpu,setInp]=useState(1);
    function handlSub(e){
        e.preventDefault();
        ajouterAuPanier(produit,inpu);
        setInp(1);
    }
    return <div className="">
        <form action="" onSubmit={handlSub}>
            <div className="card" style={{ width: "19rem" }}>
                <img className="card-img-top h-50 col-4" src={`./img/${produit.photo}`} alt="Card image cap" />
                <div className="card-body text-center">
                    <h5 className="card-title">{produit.désignation}</h5>
                    <p className="card-text">{produit.marque}</p>
                    <p className="card-text"><strong>{produit.prix} DH</strong></p>
                    <span>Quantite</span>
                    <input type="number" name="" id="" value={inpu} min={1}  onChange={(e)=>setInp(e.target.value)}/>
                    <button type ='submit' className="btn btn-primary">Ajouter</button>
                </div>
            </div>
        </form>
    </div>
}