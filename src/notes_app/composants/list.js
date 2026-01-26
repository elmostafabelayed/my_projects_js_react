import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../features/notes/notesthunks";
import { notecl } from "../features/notes/notesSlice";
import { Link } from "react-router-dom";

const NotesList = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes) || [];
  const loading = useSelector((state) => state.notes.loading);
  const error = useSelector((state) => state.notes.error);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="d-flex flex-column p-3 bg-light"
      style={{ width: "280px", height: "100vh" }}
    >
      <Link to={"Add/"}>
        <button className="btn btn-primary mb-3">+ Add Note</button>
      </Link>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 overflow-auto">
        {loading && <p>Loading notes...</p>}

        {error && <p className="text-danger">Error: {error}</p>}

        {!loading && !error && filteredNotes.length === 0 && (
          <p className="text-muted">No notes found</p>
        )}

        {!loading &&
          !error &&
          filteredNotes.map((note) => (
            <div
              onClick={() => dispatch(notecl(note.id))}
              key={note.id}
              className="card mb-2 shadow-sm"
              style={{ cursor: "pointer" }}
            >
              <div className="card-body p-2">
                <h6 className="card-title mb-1 text-truncate">{note.title}</h6>
                <p className="card-text text-muted small text-truncate">
                  {note.body}
                </p>
              </div>
            </div>
          ))}
      </div>
      
    </div>
  );
};

export default NotesList;
