import React, {useEffect, useState} from 'react';
import { useAuth } from '../Auth/auth';
import { useNavigate } from 'react-router-dom';
import TodoList from '../Todo/TodoList';
import './dashboard.scss';

export const Dashboard = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/')
    }
    
    return (
        <div className="dashboard-container">
            <div className="dashboard-wrapper">
                <aside className="aside-container">
                    <h2 className="greetings"> Hello, <span className="username">{auth.user.username}!</span></h2>
                    <button
                        className="btn logout-btn"
                        onClick={() => handleLogout()}
                    >
                        Logout
                    </button>
                </aside>
                <main>
                    <TodoList />
                </main>
            </div>
        </div>
    )
}