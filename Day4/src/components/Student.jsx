import React from "react";

function Student({ name, live }) {
  return (
    <ul>
      <li>
        name: <i>{name}</i>
      </li>
      <li>
        live: <i>{live}</i>
      </li>
    </ul>
  );
}

export default Student;
