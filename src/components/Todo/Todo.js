import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'
import TodoForm from './TodoForm';

const Todo = ({ tasks, completeTask, removeTask, showSubTasksDiv, addSubTask, completeSubTask, removeSubTask }) => {

  const [subInput, setSubInput] = React.useState('');

  const handleSubInputChange = (e) => {
    setSubInput(e.target.value);
  }

  const handleAddSubTask = (id) => {
    addSubTask(id, subInput);
    setSubInput('');
  }


  return (
    <ul className="task-row-container">
      {
        tasks.map((task, index) => (
    
          <li
            className={task.isComplete ? 'task-row complete' : 'task-row'}
            key={index}
          >
            <div className="task-row-div">
              <span key={task.id} className="title" onClick={() => completeTask(task.id)}>{task.title}</span>
                {
                  !task.isComplete ?
                    <span className="icons status-pending-icons">
                      <FontAwesomeIcon icon={faPlus} style={{ color: "#ffa500" }} onClick={() => showSubTasksDiv(task.id)} />
                      <FontAwesomeIcon icon={faTrash} style={{color: "#ffa500"}} onClick={() => removeTask(task.id)}/>
                  </span> :
                  <span className="icons"><FontAwesomeIcon icon={faCheck} style={{color: "#008a43"}} /></span>
                }
            </div>
            {
              task.subTasks && task.subTasks.length > 0 && task.subTasks.map((subTask, index) => (
                <div
                  className={"sub-task-row task-row " + (subTask.isComplete ? 'complete' : '')}
                  key={index}
                >
                  <span key={subTask.id} className="title" onClick={() => completeSubTask(task.id, subTask.id)}>{subTask.title}</span>
                    {
                      !subTask.isComplete ?
                        <span className="icons status-pending-icons">
                          <FontAwesomeIcon icon={faTrash} style={{ color: "#ffa500" }} onClick={() => removeSubTask(task.id, subTask.id)} />
                        </span> :
                        <span className="icons"><FontAwesomeIcon icon={faCheck} style={{ color: "#008a43" }} /></span>
                    }
                </div>
              ))
            }
            {
              task.showSubTasks &&
              <div className="task-form sub-task-form">
                  <input
                    type="text"
                    placeholder="Add a sub task"
                    value={subInput}
                    name="text"
                    className="task-input"
                    onChange={e => handleSubInputChange(e)}
                  />
                  <button
                    onClick={() => handleAddSubTask(task.id)}
                    className="btn primary-btn task-btn"
                  >
                    Add Sub Task
                  </button>
              </div>
            }
          </li>
        ))
      }
    </ul>
  )
};

export default Todo;