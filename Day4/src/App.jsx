import Background from "./components/Background";
import Student from "./components/Student";
import Form from "./components/Form";
import "./styles/main.css";

function App() {
  const studnets = [
    {
      name: "arkar",
      live: "ygn",
    },
    {
      name: "zaw zaw",
      live: "mdy",
    },
    {
      name: "mgmg",
      live: "mdy",
    },
  ];

  return (
    <div className="App">
      <Background>
        {studnets.map((student) => (
          <Student {...student} key={student.name} />
        ))}
      </Background>
      <Form />
    </div>
  );
}

export default App;
