import { useNotes } from "../hooks/useNotes";
import PlaceHolder from "./PlaceHolder";

function Notes() {
  const { notes } = useNotes();

  return (
    <div className="notes">
      {notes.length != 0 ? (
        notes?.map((note) => <Note key={note.id} note={note} />)
      ) : (
        <PlaceHolder />
      )}
    </div>
  );
}

function Note({ note }) {
  const { deleteNote } = useNotes();
  const time = new Date(note.timestamp);

  return (
    <div className="note">
      <div>+ {note.content}</div>
      <button onClick={() => deleteNote(note.id)}>x</button>
    </div>
  );
}

export default Notes;
