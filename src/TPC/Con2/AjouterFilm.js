import React, { useState } from 'react'
// • Un formulaire avec les champs titre, réalisateur, et année. (2pts)
const AjouterFilm = ({AjouterFil}) => {
    const[titre,setTitre]=useState('');
    const[réalisateur,setRéalisateur]=useState('');
    const[année,setAnnée]=useState('');
    function handlesub(e){
        e.preventDefault()
        if(titre ==='' ){
            alert('des champ titre vid')
        }else if (réalisateur===''){
            alert('des champ réalisateur vid')
        }else if (année===''){
            alert('des champ annee vid')
        }else{
            AjouterFil(titre,réalisateur,année)
        }
        
    }
  return (
    <div className='text-center'>
        <form action="" onSubmit={handlesub}>
            <h3>Ajouter un Nouveau Film </h3>
            <label htmlFor="">Titre</label>
            <input type="txt" name="" id="" onChange={(e)=>setTitre(e.target.value)} /><br />
            <label htmlFor="">Réalisateur</label>
            <input type="txt" name="" id="" onChange={(e)=>setRéalisateur(e.target.value)}/><br />
            <label htmlFor="">Année</label>
            <input type="txt" name="" id="" onChange={(e)=>setAnnée(e.target.value)} /><br />
            <input type="submit" value="Ajouter"className='btn btn-primary' />
        </form>
    </div>
  )
}

export default AjouterFilm