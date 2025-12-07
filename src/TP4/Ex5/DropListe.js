
export default function DropListe({list}){
    
    return (<>
     {list.map((l,i)=><option key={i} value={l}>{l}</option>)}
    </>
        
          
       
    )
}