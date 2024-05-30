import React from "react";
import { useNotes } from "../hooks/useNotes";

function Nav() {
  const { notes } = useNotes();
  return (
    <nav>
      <div className="logo">FireNote</div>
      <div>{notes.length}</div>
    </nav>
  );
}

export default Nav;
