import { useState } from "react";

export default function ElementPanier({ produit, qnt, SupprimePanier }) {

    function handlSub(e) {
        e.preventDefault();
        SupprimePanier(produit.référence);
    }

    return (
        <div className="m-2">
            <form onSubmit={handlSub}>
                <div className="card" style={{ width: "19rem" }}>
                    <img className="card-img-top h-50 col-4" src={`./img/${produit.photo}`} alt={produit.désignation} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{produit.désignation} ({qnt})</h5>
                        <p className="card-text"><strong>{produit.prix}</strong></p>
                        <button type="submit" className="btn btn-outline-primary">X</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
