import React, { useState } from 'react';
import sunImage from '../../assets/happy-sun.png';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './todo-styles/todo.scss';

function TodoList() {
    const [tasks, setTasks] = useState([]);

    const addTodo = task => {
        if (!task.title || /^\s*$/.test(task.title)) {
          return;
        }
    
        const newTasks = [task, ...tasks];
    
        setTasks(newTasks);
        console.log(...tasks);
    };


    const removeTask = id => {
        const removedArr = [...tasks].filter(task => task.id !== id);
    
        setTasks(removedArr);
    };

    const completeTask = id => {
        let updatedTasks = tasks.map(task => {
          if (task.id === id) {
            task.isComplete = !task.isComplete;
          }
          return task;
        });
        setTasks(updatedTasks);
    };
  
    const addSubTask = id => {
      console.log(id);
    }

    return (
      <div className="task-list-container">
        <div className="heading-wrapper">
          <span className="image-wrapper"><img src={sunImage} alt="Happy Sun" width="100"/></span>
          <h1 className="heading">What's the plan for today?</h1>
        </div>
        <TodoForm onSubmit={addTodo} />
        <Todo
          tasks={tasks}
          completeTask={completeTask}
          removeTask={removeTask}
          addSubTask={addSubTask}
        />
      </div>
    )
}

export default TodoList;
