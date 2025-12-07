import React from 'react'

const ListeFilms = ({film}) => {
  return (
    
    <div className='text-centre'>
        {film.map((f)=>{
            return <><h3>{f.titre}</h3><h5>{f.realisateur}</h5><h6>{f.annee}</h6></>})}
    </div>
  )
}
export default ListeFilms;