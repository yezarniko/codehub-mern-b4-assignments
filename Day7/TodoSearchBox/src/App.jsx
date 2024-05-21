import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "./styles/main.css";

function App() {
  const [id, setId] = useState("");
  const [isValidId, setIsValidId] = useState(true);
  const [todo, setTodo] = useState([]);

  async function getData(e) {
    e.preventDefault();
    if (id < 1 || id > 200) {
      setIsValidId(false);
      setId("");
      return;
    }
    const api = "https://jsonplaceholder.typicode.com/todos/";
    const response = await fetch(api + id);
    const data = await response.json();
    setIsValidId(true);
    console.log(data);
    setTodo(data);
    setId("");
  }

  return (
    <div className="App">
      <section>
        <form onSubmit={getData}>
          <input
            type="number"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          ></input>
          <button type="submit">Get Data</button>
        </form>
        {!isValidId && <h2>Please Enter a valid Id, (eg. 1, 2, 3, etc..)</h2>}
        {todo.length != 0 && (
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>complete</th>
              </tr>
            </thead>
            <tbody>
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                  {todo.completed ? (
                    <FontAwesomeIcon icon={faCircleCheck} color="green" />
                  ) : (
                    <span>not complete</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

export default App;
