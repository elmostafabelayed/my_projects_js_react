
const Post = ({ list }) => {
  
  return<> <p>nombre des posts: {list.length}</p>
   {list.map((e) =>{
   
    return <div className="bg-danger border mb-2 border-dark"><h5>{e.title}</h5><p>{e.body}</p></div>
  } )}
</>}

export default Post;
