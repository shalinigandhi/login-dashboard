import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <ul className="todo-row-container">
      {
        todos.map((todo, index) => (
    
          <li
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
            onClick={() => completeTodo(todo.id)}
          >
            <span key={todo.id} className="title">{todo.title}</span>
            {
              !todo.isComplete ?
              <span className="icons status-pending-icons">
                <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffa500", }} onClick={() => setEdit({ id: todo.id, value: todo.title })}/>
                <FontAwesomeIcon icon={faTrash} style={{color: "#ffa500"}} onClick={() => removeTodo(todo.id)}/>
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