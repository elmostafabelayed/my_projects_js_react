import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNotes } from "../features/notes/notesthunks";
import { Link } from "react-router-dom";

const NoteDetails = () => {
  const notes = useSelector((state) => state.notes.notes);
  const selectedNoteId = useSelector((state) => state.notes.selectnoteid);
  const dispatch = useDispatch();
  const selectedNote = notes.find((note) => note.id === selectedNoteId);

  if (!selectedNote) {
    return (
      <div className="flex-1 p-5">
        <p>Select a note from the list</p>
      </div>
    );
  }

  return (
    <div className="flex-grow-1 p-4">
      <h2 className="mb-3">{selectedNote.title}</h2>
      <p className="mb-4">{selectedNote.body}</p>
      <div className="d-flex gap-2">
       <Link to={`/edit/${selectedNote.id}`}> <button className="btn btn-success">Edit</button></Link>
        <button
          className="btn btn-danger"
          onClick={() => {
            if (
              window.confirm(
                `Voulez vous supprimer le notes ${selectedNote.title}?`
              )
            )
              dispatch(deleteNotes(selectedNote.id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default NoteDetails;
