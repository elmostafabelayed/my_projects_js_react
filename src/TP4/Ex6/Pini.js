import ElementPanier from "./prodS";


export default function Panier({ achats, SupprimePanier }) {
  const total = achats.reduce((tot, i) => tot + i.produit.prix * i.qnt,
    0);
  return (
    <div className="container text-center mt-4">
        <h4>Total à payer : {total} DH</h4>
      <div className="d-flex flex-wrap justify-content-center">
        {achats.map((i) => (
          <ElementPanier
            key={i.produit.référence}
            produit={i.produit}
            qnt={i.qnt}
            SupprimePanier={SupprimePanier}
          />
        ))}
      </div>
      
    </div>
  );
}
