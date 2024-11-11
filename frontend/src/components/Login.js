import React, {useState, useContext } from 'react';
import { AuthContext } from '../App';

function Login(){
    const { login } = useContext(AuthContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const handleLogin = async (e) => {
        e.preventDefault();
        await login({ email, password });
    };

    return(
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;