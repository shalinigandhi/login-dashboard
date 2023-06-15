import React, { useState } from 'react';
import './todo-styles/todo-form.scss';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            title: input
          });
        setInput('');
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <form className='todo-form' onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                placeholder="What is your next task?"
                value={input}
                name="text"
                className="todo-input"
                onChange={(e) => handleChange(e)}
            />
            <button className="btn primary-btn todo-btn">Add Task</button>
        </form>
    )
}

export default TodoForm;
