import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/auth';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        let data = {
            'username': username,
            'password': password
        }
        auth.login(data);
        navigate('/dashboard', {replace: true})
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={() => handleLogin()}>Login</button>
            </form>
        </div>
    )
}