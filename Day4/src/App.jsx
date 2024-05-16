import Background from "./components/Background";
import Student from "./components/Student";
import "./styles/main.css";

function App() {
  const name = "Code Hub";
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
    </div>
  );
}

export default App;
