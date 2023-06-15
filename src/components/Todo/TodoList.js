import React, { useState } from 'react';
import sunImage from '../../assets/happy-sun.png';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './todo-styles/todo.scss';

function TodoList({tasks, setTasks}) {
  // const [tasks, setTasks] = useState([]);

    const addTodo = task => {
        if (!task.title || /^\s*$/.test(task.title)) {
          return;
        }
    
        const newTasks = [task, ...tasks];
    
        setTasks(newTasks);
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
  
    const showSubTasksDiv = id => {
      let updatedTasks = tasks.map(task => {
        if (task.id === id) { 
          task.showSubTasks = true;
        }
        return task;
      });
      setTasks(updatedTasks);
    }

  
    const addSubTask = (id, value) => {
      let updatedTasks = tasks.map(task => {
        if (task.id === id) { 
          task.showSubTasks = false;
          task.subTasks.push({
            id: id + "_" + task.subTasks.length,
            title: value,
            isComplete: false
          });
        }
        return task;
      });
      setTasks(updatedTasks);
    }
  
    const removeSubTask = (taskId, subTaskId) => {
      const removedTasks = tasks.map((task) => {
        let removedSubTaskArr = [];
        if (task.id === taskId) {
          removedSubTaskArr = [...task.subTasks].filter(subTask => subTask.id !== subTaskId);
          task.subTasks = [...removedSubTaskArr];
        }
        return task;
      })
      setTasks(removedTasks);
    }
  
    const completeSubTask = (taskId, subTaskId) => {
      let updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
          task.subTasks.map((subTask) => {
            if (subTask.id === subTaskId) {
              subTask.isComplete = !subTask.isComplete;
            }
            return subTask;
          })
          const isTaskFullyComplete = task.subTasks.every((subTask) => (
            subTask.isComplete === true
          ))
          if (isTaskFullyComplete) {
            completeTask(taskId);
          } else {
            task.isComplete = false;
          }
        }
        return task;
      });
      setTasks(updatedTasks);
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
          showSubTasksDiv={showSubTasksDiv}
          removeSubTask={removeSubTask}
          completeSubTask={completeSubTask}
        />
      </div>
    )
}

export default TodoList;
