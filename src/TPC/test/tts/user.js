export default function User({list}){
return (
    <div className='container mr-50 border mb-2 border-dark bg-success  w-50'>
        <p>
        Id {list.id} nom : {list.name}<br/>
          email : {list.email}<br/>
          telephone : {list.phone}<br/>
          ville : {list.address.city}<br/>
          rue : {list.address.street}<br/>
        </p>
    </div>
  )}
