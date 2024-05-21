import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircle } from "@fortawesome/free-regular-svg-icons";
import "./styles/main.css";

function App() {
  const [todos, setTodos] = useState([]);

  async function fetchData() {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setTodos(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <section>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>complete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                  {todo.completed ? (
                    <FontAwesomeIcon icon={faCircleCheck} color="green" />
                  ) : (
                    <FontAwesomeIcon icon={faCircle} color="gray" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
