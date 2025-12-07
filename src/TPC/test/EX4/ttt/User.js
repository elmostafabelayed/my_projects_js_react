import React from 'react'
import Post from './Post'

const User = ({info,hhhhh,list,userId}) => {
  
  return (
    <div className='container mr-50 border mb-2 border-dark bg-success  w-50'>
        <p>
          nom : {info.name}<br/>
          address : {info.email}<br/>
          ville : {info.address.city}
          rue : {info.address.street}
        </p>
        <button onClick={()=>hhhhh(info.id)}>
          information posts
        </button>
           {userId === info.id && <Post list={list}></Post>}
    </div>
  )
}

export default User