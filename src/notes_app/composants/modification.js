import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateNotes } from "../features/notes/notesthunks";

export default function Modification() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const list = useSelector((s) => s.notes.notes);

  const found = list.find((n) => n.id == id);

  const [editedNote, setEditedNote] = useState({ title: "", body: "" });
  const [toast, setToast] = useState(false);
  const [errors, setErrors] = useState({});

  // Initialize state when note is found
  useEffect(() => {
    if (found) setEditedNote({ title: found.title, body: found.body });
  }, [found]);

  if (!list.length) return <p className="p-5">Loading...</p>;
  if (!found) return <p className="alert alert-warning p-5">Note not found!</p>;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple inline validation
    const errs = {};
    if (!editedNote.title.trim()) errs.title = "Title is required";
    if (!editedNote.body.trim()) errs.body = "Body is required";
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    dispatch(updateNotes({ id: found.id, ...editedNote })).then(() => {
      setToast(true);
      setTimeout(() => {
        setToast(false);
        nav("/");
      }, 2000);
    });
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card shadow-sm p-4" style={{ width: "420px" }}>
        <h4 className="mb-4 text-center">Edit Note #{found.id}</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              value={editedNote.title}
              onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })}
            />
            {errors.title && <div className="invalid-feedback">{errors.title}</div>}
          </div>
          <div className="mb-4">
            <textarea
              className={`form-control ${errors.body ? "is-invalid" : ""}`}
              rows="4"
              value={editedNote.body}
              onChange={(e) => setEditedNote({ ...editedNote, body: e.target.value })}
            />
            {errors.body && <div className="invalid-feedback">{errors.body}</div>}
          </div>
          <button className="btn btn-success w-100">Save Changes</button>
        </form>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className="position-fixed bottom-0 end-0 m-3 p-3 bg-success text-white rounded shadow"
          style={{ zIndex: 9999 }}
        >
          Note updated successfully!
        </div>
      )}
    </div>
  );
}
