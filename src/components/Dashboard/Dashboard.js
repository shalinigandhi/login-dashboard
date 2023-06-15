import React from 'react';
import { useAuth } from '../Auth/auth';
import { useNavigate } from 'react-router-dom';
import TodoList from '../Todo/TodoList';
import './dashboard.scss';

export const Dashboard = () => {
    const [tasks, setTasks] = React.useState([]);
    
    const auth = useAuth();
    const navigate = useNavigate();

    console.log(tasks);

    const handleLogout = () => {
        auth.logout();
        navigate('/')
    }
    
    return (
        <div className="dashboard-container">
            <div className="dashboard-wrapper">
                <aside className="aside-container">
                    <div className="user-details">
                        <h2 className="greetings"> Hello, <span className="username">{auth.user.username}!</span></h2>
                        <p className="message">{tasks.length > 0 && <span>{ tasks.length} Tasks, </span>}Limitless Possibilities: Discover the magic of today!</p>
                    </div>
                    
                    <button
                        className="btn logout-btn"
                        onClick={() => handleLogout()}
                    >
                        Logout
                    </button>
                </aside>
                <main>
                    <TodoList tasks={tasks} setTasks={setTasks} />
                </main>
            </div>
        </div>
    )
}