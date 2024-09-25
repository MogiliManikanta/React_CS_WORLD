import React, { useState } from "react";
import "./Todo.css"; // Assuming you have a separate CSS file

function TodoApp() {
  let [input, setInput] = useState("");

  let [task, setTask] = useState([
    {
      id: 1,
      task: "Learn React",
    },
    {
      id: 2,
      task: "Learn Redux",
    },
  ]);
  //   let index = 3;
  function AddItem() {
    if (input.trim() === "") {
      alert("Enter task");
    } else {
      let previous = [
        ...task,
        {
          id: task.length + 1,
          task: input,
        },
      ];
      setTask(previous);
      setInput("");
    }
  }
  function deleteTodo(id) {
    let update = task.filter((todo) => todo.id !== id);
    setTask(update);
  }
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Enter task"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button
          onClick={() => {
            AddItem();
          }}
        >
          Add
        </button>
      </div>
      {task.map((todo) => {
        return (
          <div className="todo-item" key={todo.id}>
            <input type="checkbox" />
            <p>{todo.task}</p>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoApp;
