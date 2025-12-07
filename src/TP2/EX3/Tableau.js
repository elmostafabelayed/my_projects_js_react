import  {Taches} from './data'
const tot = Taches.reduce((tot,tch)=>tot+tch.Durée,0)
export default function Tableau(){
    return <div><table className="table" >
      <thead>
        <tr>
          <th>Code Tache</th>
          <th>Date Tache</th>
          <th>Resumé Tache</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Taches.map(function(tch)
        { return(<tr key={tch.Code}>
            <td>{tch.Code}</td>
            <td>{tch.Date}</td>
            <td>{tch.Resumé}</td>
            <td><a href='#'>Delaits</a></td>
          </tr>)
          })}

      </tbody>
    </table>
    <p>touch h {tot} h</p>
    </div>
    
}