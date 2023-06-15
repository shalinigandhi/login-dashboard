import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/auth';
import credentials from '../../data/credentials.json';
import './login.scss';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
       
        const isValidCredentials = credentials.users.filter((user) => {
            if (user.username.toLowerCase() === username.toLowerCase()) {
                if (user.password.toLowerCase() === password.toLowerCase()) {
                    return true;
                }
            }
        })

        if (isValidCredentials && isValidCredentials.length) {
            auth.login({
                'username': username,
                'password': password
            });
            navigate('/dashboard')
        } else {
            setError('*Invalid username and/or password');
        }
        
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
        setError('');
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setError('');
    }

    return (
        <div className="login-container">
            <form onSubmit={e => handleLogin(e)}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" onChange={(e) => handleUsername(e)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={(e) => handlePassword(e)} />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button className="btn login-btn">Login</button>
            </form>
        </div>
    )
}