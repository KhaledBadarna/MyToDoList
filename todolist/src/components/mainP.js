import React from "react";
function Todolist() {
  const Array = [];
  const [todo, setTodo] = React.useState("");

  function handelChange(event) {
    setTodo(event.target.value);
  }

  function handelClick() {
    Array.push(todo);
  }

  return (
    <div class="imgBG">
      <div class="todo">
        <h1>Enter your To do</h1>
        <input
          class="ToDoinput"
          placeholder=" To Do"
          onChange={handelChange}
        ></input>
        <br />
        <button type="submit" onClick={handelClick}>
          Submit ToDo
        </button>
        <output>{Array}</output>
      </div>
    </div>
  );
}

export default Todolist;
