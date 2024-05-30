import Nav from "./components/Nav";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import { NotesContextProvider } from "./hooks/useNotes";

function App() {
  return (
    <div className="App">
      <NotesContextProvider>
        <Nav />
        <AddNote />
        <Notes />
      </NotesContextProvider>
    </div>
  );
}

export default App;
