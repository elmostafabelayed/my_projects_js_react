export default function InfoOrdinatuer({ob}){
//      {
//     Numero: 100,
//     Marque: "MarqueX",
//     Intitulé: "Ordinateur X",
//     DateAchat: "01/12/2022",
//     Salle: "SalleX",
//   }
    return (<div>
        <p>Numero : {ob.Numero}</p>
        <p>Intitulé : {ob.Intitulé}</p>
        <p>Date Achat : {ob.DateAchat}</p>
    </div>)
}