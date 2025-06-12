import React from 'react';
import { TodoForm } from './TodoForm';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () =>{

    const [todos, setTodos] = useState([]);

    const addNewTodo = (todo) =>{
        let tempTodo = [...todos, {id: uuid(), isEditing: false, completed: false, task: todo}];
        setTodos(tempTodo);
    }

    const deleteTodo = (id) => {
        console.log("id:" + id);
        let tempTodos = todos.filter((todo) => todo.id != id);
        console.log(tempTodos);
        setTodos(tempTodos);
    }

    const editTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo));
    }

    const toggleComplete = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    }

    const editTask = (task, id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, task: task, isEditing: !todo.isEditing} : todo));
    }

    return (
        <div className='TodoWrapper'>
            <h1>Get things done!</h1>
            <TodoForm addTodo={addNewTodo}></TodoForm>
            {todos.map((todo, index) => (
                todo.isEditing ? 
                (<EditTodoForm editTodo={editTask} task={todo}/>)
                :
                (<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>)
            ))}
        </div>
    )
}

//export default TodoWrapper;