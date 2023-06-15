import React, { useState } from 'react';
import sunImage from '../../assets/happy-sun.png';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './todo-styles/todo.scss';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.title || /^\s*$/.test(todo.title)) {
          return;
        }
    
        const newTodos = [todo, ...todos];
    
        setTodos(newTodos);
        console.log(...todos);
    };


    const removeTask = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
    };

    const completeTask = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
    };

    return (
      <div className="todo-list-container">
        <div className="heading-wrapper">
          <span className="image-wrapper"><img src={sunImage} alt="Happy Sun" width="100"/></span>
          <h1 className="heading">What's the plan for today?</h1>
        </div>
        <TodoForm onSubmit={addTodo} />
        <Todo
            todos={todos}
            completeTask={completeTask}
            removeTask={removeTask}
        />
      </div>
    )
}

export default TodoList;
