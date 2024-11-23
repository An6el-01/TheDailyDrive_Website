import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";

function AuthBox() {
  const { login, register } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const [isDarkMode, setIsDarkMode] = useState(false); // Toggle dark mode
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "#fff" : "#000";
    document.body.style.color = isDarkMode ? "#000" : "#fff";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await login({ email: loginEmail, password: loginPassword });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await register({
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    });
  };

  return (
    <div style={styles.container}>
      {/* Dark Mode Toggle */}
      <span onClick={toggleDarkMode} style={styles.darkModeToggle}>
        {isDarkMode ? "☀️" : "🌙"}
      </span>

      {/* Outer Box */}
      <div style={{ ...styles.box, backgroundColor: isDarkMode ? "#1a1a1a" : "#f7f7f7" }}>
        {/* Login and Register Forms */}
        <div style={styles.forms}>
          {/* Login Form */}
          <div style={{ ...styles.form, backgroundColor: isDarkMode ? "#2c2c2c" : "#fff" }}>
            <h2 style={{ ...styles.heading, color: isDarkMode ? "#fff" : "#000" }}>Log In</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="✉️ Email: "
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                style={{
                  ...styles.input,
                  backgroundColor: isDarkMode ? "#3c3c3c" : "#fff",
                  color: isDarkMode ? "#fff" : "#000",
                }}
              />
              <input
                type="password"
                placeholder="🔒 Password:"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                style={{
                  ...styles.input,
                  backgroundColor: isDarkMode ? "#3c3c3c" : "#fff",
                  color: isDarkMode ? "#fff" : "#000",
                }}
              />
              <button type="submit" style={styles.button}>
                Log In
              </button>
            </form>
          </div>

          {/* Register Form */}
          <div style={{ ...styles.form, backgroundColor: isDarkMode ? "#2c2c2c" : "#fff" }}>
            <h2 style={{ ...styles.heading, color: isDarkMode ? "#fff" : "#000" }}>Sign Up</h2>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="🙋 Name:"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                style={{
                  ...styles.input,
                  backgroundColor: isDarkMode ? "#3c3c3c" : "#fff",
                  color: isDarkMode ? "#fff" : "#000",
                }}
              />
              <input
                type="email"
                placeholder="✉️ Email:"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                style={{
                  ...styles.input,
                  backgroundColor: isDarkMode ? "#3c3c3c" : "#fff",
                  color: isDarkMode ? "#fff" : "#000",
                }}
              />
              <input
                type="password"
                placeholder="🔒 Password:"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                style={{
                  ...styles.input,
                  backgroundColor: isDarkMode ? "#3c3c3c" : "#fff",
                  color: isDarkMode ? "#fff" : "#000",
                }}
              />
              <button type="submit" style={styles.button}>
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Side Panel */}
        <div
          style={{
            ...styles.panel,
            right: isLogin ? "50%" : "0%", // Dynamically position panel
          }}
        >
          {isLogin ? (
            <div style={styles.panelContent}>
              <h2 style={styles.panelHeading}>Already Have An Account?</h2>
              <p style={styles.panelText}>Log in to continue.</p>
              <button
                style={styles.panelButton}
                onClick={() => setIsLogin(false)}
              >
                Log In
              </button>
            </div>
          ) : (
            <div style={styles.panelContent}>
              <h2 style={styles.panelHeading}>New Here?</h2>
              <p style={styles.panelText}>Join the family by signing up!</p>
              <button
                style={styles.panelButton}
                onClick={() => setIsLogin(true)}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    transition: "background-color 0.5s ease, color 0.5s ease",
  },
  box: {
    position: "relative",
    width: "800px",
    height: "500px",
    display: "flex",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
    border: "1px solid black",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "background-color 0.5s ease, color 0.5s ease",
  },
  forms: {
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "100%",
    transition: "left 0.5s ease-in-out",
  },
  form: {
    width: "50%",
    padding: "40px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

  },
  input: {
    width: "80%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  panel: {
    position: "absolute",
    top: "0",
    width: "50%",
    height: "100%",
    background: "linear-gradient(90deg, #007bff, #0056b3)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
    transition: "right 0.5s ease-in-out",
  },
  panelContent: {
    textAlign: "center",
  },
  panelHeading: {
    marginBottom: "10px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  panelText: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  panelButton: {
    padding: "10px 20px",
    backgroundColor: "#fff",
    color: "#007bff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  darkModeToggle: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#007bff",
  },
};

export default AuthBox;
