import "./style.css";
import listEtd from "./data"
export default  function List(){
    return <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {listEtd.map(function(etd)
        { return(<tr key={etd.id}>
            <td>{etd.id}</td>
            <td>{etd.nom}</td>
            <td>{etd.note}</td>
          </tr>)
          })}
      </tbody>
    </table>
}