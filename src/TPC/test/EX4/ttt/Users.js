import React from 'react'
import User from './User'



const Users = ({ utilisateurs, hhhhh, list,userId })=> {
  return (
    <div>
        {utilisateurs.map(elm=><User list={list} userId={userId} hhhhh={hhhhh} info={elm}/>)}
    </div>
  )
}

export default Users