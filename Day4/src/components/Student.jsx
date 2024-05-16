import React, { useState } from "react";

function Student(props) {
  let live = props.live;
  const [name, setName] = useState(props.name);

  return (
    <ul>
      <li>
        name: <i>{name}</i>
      </li>
      <li>
        live: <i>{live}</i>
      </li>
      <button onClick={() => setName("Name updated")}>Change Name</button>
    </ul>
  );
}

export default Student;
