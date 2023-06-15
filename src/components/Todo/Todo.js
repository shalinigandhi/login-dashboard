import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ todos, completeTask, removeTask }) => {

  return (
    <ul className="todo-row-container">
      {
        todos.map((todo, index) => (
    
          <li
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
          >
            <span key={todo.id} className="title" onClick={() => completeTask(todo.id)}>{todo.title}</span>
            {
              !todo.isComplete ?
                <span className="icons status-pending-icons">
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#ffa500" }}/>
                  <FontAwesomeIcon icon={faTrash} style={{color: "#ffa500"}} onClick={() => removeTask(todo.id)}/>
              </span> :
              <span className="icons"><FontAwesomeIcon icon={faCheck} style={{color: "#008a43"}} /></span>
            }
            
          </li>
        ))
      }
    </ul>
  )
};

export default Todo;