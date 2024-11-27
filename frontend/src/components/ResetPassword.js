import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { resetPassword } from '../services/authService';

function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [searchParams] = useSearchParams();

    const token = searchParams.get('token'); // Token is fetched but not shown to the user

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (!email) {
            setMessage('Please enter your email.');
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        if (!token) {
            setMessage('Invalid or missing reset token.');
            console.error('Token is missing:', token);
            return;
        }

        try {
            const response = await resetPassword({
                token,
                email,
                password,
                password_confirmation: confirmPassword,
            });

            if (response.status === 200) {
                setMessage('Your password has been successfully reset.');
            } else {
                setMessage('Error resetting password. Please try again.');
            }
        } catch (error) {
            console.error('Error resetting password: ', error);
            setMessage(`An error occurred. Please try again later: ${error}`);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Reset Password</h2>
            <form onSubmit={handleResetPassword} style={styles.form}>
                {/* Email field */}
                <input
                    type="email"
                    placeholder="✉️ Email:"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                {/* Password fields */}
                <input
                    type="password"
                    placeholder="🔒 Password:"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="🔒 Confirm Password:"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Reset Password</button>
            </form>
            {message && <p style={styles.message}>{message}</p>}
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
        padding: "20px",
    },
    heading: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#333",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#fff",
    },
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "10px, 20px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#007bff",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
    },
    message: {
        marginTop: "20px",
        fontSize: "16px",
        color: "#007bff",
    },
};

export default ResetPassword;
