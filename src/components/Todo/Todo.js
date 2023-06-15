import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ tasks, completeTask, removeTask, addSubTask }) => {

  return (
    <ul className="task-row-container">
      {
        tasks.map((task, index) => (
    
          <li
            className={task.isComplete ? 'task-row complete' : 'task-row'}
            key={index}
          >
            <span key={task.id} className="title" onClick={() => completeTask(task.id)}>{task.title}</span>
            {
              !task.isComplete ?
                <span className="icons status-pending-icons">
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#ffa500" }} onClick={() => addSubTask(task.id)} />
                  <FontAwesomeIcon icon={faTrash} style={{color: "#ffa500"}} onClick={() => removeTask(task.id)}/>
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