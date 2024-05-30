import { createContext, useContext, useEffect, useState } from "react";
import { getDatabase, ref, onValue, set, remove } from "firebase/database";
import { useFirebase } from "./useFirebase";
import { v4 as uuidv4 } from "uuid";

const NotesContext = createContext(null);

export function NotesContextProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const app = useFirebase();
  const db = getDatabase(app);

  useEffect(() => {
    const notesRef = ref(db, "notes/");
    onValue(notesRef, (snapshot) => {
      // get snapshot
      const data = snapshot.val() || [];
      console.log("🚀 ~ file: useNotes.jsx:23 ~ data:", data);

      let notesList = Object.values(data);
      // sort notes
      notesList.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
      notesList.reverse();

      // set notes
      setNotes(notesList);
    });
  }, []);

  function createNote(content) {
    const id = uuidv4();
    const timestamp = new Date();
    set(ref(db, "notes/" + id), {
      id: id,
      content: content,
      timestamp: timestamp.toISOString(),
    });
  }

  function deleteNote(id) {
    remove(ref(db, "notes/" + id));
  }

  return (
    <NotesContext.Provider value={{ notes, createNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}
