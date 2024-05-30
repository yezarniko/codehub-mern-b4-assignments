import { useNotes } from "../hooks/useNotes";
import { useRef } from "react";

function AddNote() {
  const { createNote } = useNotes();
  const inputRef = useRef(null);

  function addNoteHandler(e) {
    e.preventDefault();
    createNote(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <form className="add-note-form" onSubmit={addNoteHandler}>
      <input type="text" ref={inputRef} />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default AddNote;
