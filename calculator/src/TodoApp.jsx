import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TodoApp() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  function addTask() {
    if (task.trim() === "") return;

    let newList = [...list, task];
    newList.sort();

    setList(newList);
    setTask("");
  }

  function deleteTask(index) {
    setList(list.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Todo App</h2>

      <input
        type="text"
        value={task}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <hr />

      {/* ✅ Back Button */}
      <button onClick={() => navigate("/calculator")}>
        Back To Calculator
      </button>
    </div>
  );
}

export default TodoApp;
