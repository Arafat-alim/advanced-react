import React, { useState, useRef } from "react";

function TodoList() {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  const addNewTodo = (e) => {
    e.preventDefault();
    setTodoList((prevTodoList) => [...prevTodoList, todoValue]);
    setTodoValue("");
    inputRef.current.focus();
  };

  //! mapping
  const todos = todoList.map((item, index) => (
    <ul key={index}>
      <li>{item}</li>
    </ul>
  ));
  return (
    <form>
      <input
        type="text"
        ref={inputRef}
        value={todoValue}
        onChange={handleChange}
        placeholder="Enter a new Todo"
      />
      <button onClick={addNewTodo}>Add</button>
      {todos}
    </form>
  );
}

export default TodoList;
