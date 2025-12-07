export default function ListDR(props){
    return <>
    <label for="cars">{props.texte}</label>
    <select name="cars" id="cars">
        {props.elements.map(function(j){
            return <option value={j}>{j}</option>
        })}
</select></>
    }