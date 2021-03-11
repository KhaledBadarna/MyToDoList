import React, { useState } from "react";
import { FaTrashAlt, FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
function Todolist() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const [isDone, setisDone] = useState(false);

  function handelChange(event) {
    const newValue = event.target.value;

    setTodo(newValue);
  }

  function handelClick() {
    setItems(() => {
      return [...items, todo];
    });
    setTodo(" ");
  }
  function checkingTodo() {
    setisDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="imgBG">
      <div className="todo">
        <h1>Enter your To do</h1>
        <input
          class="ToDoinput"
          placeholder=" To Do"
          onChange={handelChange}
        ></input>
        <br />
        <button type="submit" onClick={handelClick}>
          Add ToDo
        </button>
        <ul className="todolist-ul" onClick={checkingTodo}>
          {items.map((todoItem) => (
            <li className="todolist-il">
              <FaRegCircle size="1.5em" color="cornflowerblue" />
              {todoItem} <FaTrashAlt size="1.5em" color="cornflowerblue" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
