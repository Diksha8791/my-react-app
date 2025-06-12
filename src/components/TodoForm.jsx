import React from "react";
import { useState } from "react";

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    addTodo(value);
    setValue("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="what is your task today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
      <button className="todo-btn" type="submit">Add Task</button>
    </form>
  );
};
