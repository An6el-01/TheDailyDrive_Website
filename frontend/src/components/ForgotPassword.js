import React, { useState } from 'react';
import { forgotPassword } from '../services/authService'

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] =  useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);

    } 

    const handleForgotPassword = async (e) => {
        e.preventDefault();
    
        if (!email || !validateEmail(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }
    
        try {
            const response = await forgotPassword(email);
            setMessage("If an account with this email exists, a password reset link has been sent.");
        } catch (error) {
            console.error("Error sending forgot password email:", error);
    
            if (error.response && error.response.data && error.response.data.message) {
                setMessage(error.response.data.message); // Backend error message
            } else {
                setMessage("An error occurred. Please try again later.");
            }
        }
    };
    


    return(
        <div style={styles.container}>
        <h2 style={styles.heading}>Forgot Password</h2>
        <p style={styles.description}>Enter your email to receive a password reset link.</p>
        <form onSubmit={handleForgotPassword} style={styles.form}>
          <input
            type="email"
            placeholder="✉️ Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Send Reset Link</button>
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
    description: {
        fontSize: "16px",
        marginBottom: "20px",
        textAlign: "center",
        color: "#555",
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

export default ForgotPassword;