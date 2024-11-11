import React, { useState, useContext } from 'react';
import { AuthContext } from '../App';

function Register() {
    const {register} = useContext(AuthContext);
    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        await register({ email, password });
    };

    return(
        <form onSubmit={handleRegister}>
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
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;