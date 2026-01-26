import { Button } from "bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {ChangerEtat} from "../DemandeSlice"
import Header from "./Header";
export default function List(){
    const disptch=useDispatch();
    const la =useSelector((lis)=>lis.domone.demandes)
    return <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Matricule</th>
      <th scope="col">Nom</th>
      <th scope="col">Date de depart</th>
      <th scope="col">Date de retour</th>
      <th scope="col">Etat</th>
      <th scope="col">Decision</th>
    </tr>
  </thead>
  <tbody>
    {
        la.map((list)=>
    <tr key={list.id}>
      <th scope="row">{list.id}</th>
      <td>{list.matricule}</td>
      <td>{list.nom}</td>
      <td>{list.dateDepart}</td>
      <td>{list.dateRetour}</td>
      <td>{list.etat}</td>
      <td>{list.etat === 'en cours' ? <span><button onClick={()=>disptch(ChangerEtat({id:list.id,etat:'validé'}))}>✅</button><button onClick={()=>disptch(ChangerEtat({id:list.id,etat:'refusé'}))}>✖️</button></span>  :''}</td>
    </tr>)
    }
    
  </tbody>
</table>
    </div>
}