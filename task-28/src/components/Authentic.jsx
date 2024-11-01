import React from 'react'
import { useState } from 'react';
import { login } from '../utils/auth';
import { useNavigate } from 'react-router-dom';


const Authentic = () => {
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        login(token);
        navigate('/dashboard');
    };

    return (
        <div>
          <h1>Login</h1>
          <div >
          <input
          type="text"
          placeholder="Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button onClick={handleLogin}>
            Login
        </button>
        </div>
    </div>
    );
}

export default Authentic