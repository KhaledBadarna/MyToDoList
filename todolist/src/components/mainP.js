import React, { useState } from "react";
import {
  FaTrashAlt,
  FaCheckCircle,
  FaPlusSquare,
  FaDotCircle,
} from "react-icons/fa";
function Todolist() {
  const [todo, setTodo] = useState(" ");
  const [items, setItems] = useState([]);
  const [isDone, setisDone] = useState(false);

  function handelChange(event) {
    const newValue = event.target.value;

    setTodo(newValue);
  }

  function handelClickAdd() {
    if (todo !== " ") {
      setItems(() => {
        return [...items, todo];
      });
    }
    setTodo(" ");
  }
  function checkingTodo() {
    setisDone((prevValue) => {
      return !prevValue;
    });
  }
  function checkedItem() {
    return !isDone;
  }

  return (
    <div className="imgBG">
      <div className="todo">
        <h1>Enter your To do</h1>
        <input
          class="ToDoinput"
          placeholder=" To Do"
          onChange={handelChange}
          value={todo}
        ></input>
        <i>
          <FaPlusSquare type="submit" onClick={handelClickAdd} size="2em" />
        </i>

        <ul className="todolist-ul" onClick={checkingTodo}>
          {items.map((todoItem) => (
            <li className="todolist-il">
              <i onClick={checkedItem}>
                {isDone ? (
                  <FaCheckCircle size="1.5em" />
                ) : (
                  <FaDotCircle size="1.5em" />
                )}
              </i>
              {todoItem}
              <FaTrashAlt size="1.5em" onClick={() => alert("clicked")} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
