import React, { useState } from "react";
import Avatar from "../../assets/avatar.png";
import Avatar2 from "../../assets/avatar2.png";
import Avatar3 from "../../assets/avatar3.jpg";

function Student(props) {
  let live = props.live;
  const avatars = [Avatar, Avatar2, Avatar3];

  const [name, setName] = useState(props.name);

  const [currentAvatar, setCurrentAvatar] = useState(
    avatars[Math.round((Math.random() * 10) % 2)]
  );

  return (
    <section>
      <div
        className="student-avatar"
        onClick={() => {
          setCurrentAvatar((avatar) => {
            let index = avatars.indexOf(avatar) + 1;
            if (index > 2) index = 0;
            return avatars[index];
          });
        }}
      >
        <img src={currentAvatar} />
      </div>
      <div className="student-data__container">
        <div className="student-labels">
          <div>name:</div>
          <div>live:</div>
        </div>
        <div className="student-data">
          <div>{name}</div>
          <div>{live}</div>
        </div>
      </div>
    </section>
  );
}

export default Student;
