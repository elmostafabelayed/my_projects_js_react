export default function Ctache({ props, Suprim, listhhh }) {
  return (
    <>
      <div key={props.id}>
        <input
          type="checkbox"
          checked={props.termin}
          onChange={() => listhhh(props.id)}
        />
        {props.description}
        <button onClick={() => Suprim(props.id)}>Supprimer</button>
      </div>
    </>
  );
}
