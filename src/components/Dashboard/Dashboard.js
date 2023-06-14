import React from 'react';
import { useAuth } from '../Auth/auth';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/')
    }
    
    return (
        <div className="dashboard-container">
            Welcome {auth.user.username}
            <button onClick={() => handleLogout()}>Logout</button>
        </div>
    )
}