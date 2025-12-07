export default function Person({p}){
    return <div>
        <h1>List du Personnel</h1>
        <h5><strong>Matricule : </strong>{p.Matricule}</h5>
        <h5><strong>Nom : </strong>{p.Nom}</h5>
        <h5><strong>Prenom : </strong>{p.Prenom}</h5>
        <h5><strong>Service : </strong>{p.Service}</h5>
    </div>
}