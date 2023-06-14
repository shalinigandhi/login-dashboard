import React, { useState } from 'react';
import { useNavigate, useLocation, redirect } from 'react-router-dom';
import { useAuth } from '../Auth/auth';

export const Login = () => {
    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = () => {
        auth.login(user);
        navigate('/dashboard', {replace: true})
    }

    return (
        <div>
            <label>
                Username:
                <input type="text" onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    )
}