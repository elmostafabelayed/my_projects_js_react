import { useState } from "react";
import { useDispatch } from "react-redux";
import { creatNotes } from "../features/notes/notesthunks";
import { useNavigate } from "react-router-dom";

export default function Ajout() {
  const [titre, setTitre] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false); // toast state
  const dispatch = useDispatch();
  const nav = useNavigate();

  function validate() {
    const errs = {};
    if (!titre.trim()) errs.titre = "Title is required";
    if (!body.trim()) errs.body = "Body is required";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    dispatch(creatNotes({ title: titre, body })).then(() => {
      setToast(true); // show toast
      setTimeout(() => {
        setToast(false); // hide after 3s
        nav("/");
      }, 3000);
    });
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-sm p-4" style={{ width: "420px" }}>
        <h4 className="mb-4 text-center">Add New Note</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className={`form-control ${errors.titre ? "is-invalid" : ""}`}
              value={titre}
              onChange={(e) => {
                setTitre(e.target.value);
                setErrors({ ...errors, titre: "" });
              }}
            />
            {errors.titre && <div className="invalid-feedback">{errors.titre}</div>}
          </div>

          <div className="mb-4">
            <label className="form-label">Body</label>
            <textarea
              className={`form-control ${errors.body ? "is-invalid" : ""}`}
              rows="4"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
                setErrors({ ...errors, body: "" });
              }}
            ></textarea>
            {errors.body && <div className="invalid-feedback">{errors.body}</div>}
          </div>

          <button className="btn btn-success w-100">Save Note</button>
        </form>
      </div>

      {/* Toast notification */}
      {toast && (
        <div
          className="position-fixed bottom-0 end-0 m-3 p-3 bg-success text-white rounded shadow"
          style={{ zIndex: 9999 }}
        >
          Note added successfully!
        </div>
      )}
    </div>
  );
}
