import { useRef } from "react";

export default function Rechercher({ setTerme }) {
  const terme = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    setTerme(terme.current.value);
  }
  return (
    <div className="w-50 mx-auto mb-3">
      <form action="" onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          type="text"
          placeholder="Chercher par titre ou par description"
          ref={terme}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">
          Rechercher
        </button>
      </form>
    </div>
  );
}
