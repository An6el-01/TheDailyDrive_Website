import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

function Authentication() {
    return(
        <div>
            <h2>Login</h2>
            <Login />
            <h2>Register</h2>
            <Register />
        </div>
    );
}

export default Authentication;