import Background from "./components/Background";
import Student from "./components/One/Student";
import Form, { NoDataThumbnail } from "./components/One/Form";
import "./styles/main.css";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  function addNewMember(meminfo) {
    console.log(meminfo);
    setStudents((prevStudents) => [...prevStudents, meminfo]);
  }

  let studentsDataContent = <NoDataThumbnail />;

  if (!students.length < 1) {
    studentsDataContent = students.map((student) => (
      <Student {...student} key={student.name} />
    ));
  }

  return (
    <div className="App">
      <Background>{studentsDataContent}</Background>
      <Form {...{ addNewMember }} />
    </div>
  );
}

export default App;
