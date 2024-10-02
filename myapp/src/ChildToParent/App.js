import { useState } from "react";
import Search from "./Search";
function App() {
  const [todo, setTodo] = useState(["todo1", "todo2"]);

  const addNew = (task) => {
    setTodo([task, ...todo]);
  };
  return (
    <>
      <h1> hai </h1>
      {todo.map((t) => {
        return (
          <ul>
            <li>{t}</li>
          </ul>
        );
      })}
      <Search addNewTodo={addNew} />
    </>
  );
}

export default App;

// 1. In parent Component create a function

// 2. pass that function as props to child component

// 3. provide child data by calling that function
