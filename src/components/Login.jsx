import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../index.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validate Email
  const validateEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(emailValue) ? "" : "❌ Invalid email format.");
  };

  // Validate Password
  const validatePassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    setPasswordError(passwordValue.length >= 6 ? "" : "❌ Password must be at least 6 characters long.");
  };

  // Handle Login
  const handleLogin = () => {
    if (!emailError && !passwordError && email && password) {
      navigate("/dashboard");
    }
  };

  // Handle Enter Key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={validateEmail}
          onKeyPress={handleKeyPress}
        />
        {emailError && <div className="error-box">{emailError}</div>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={validatePassword}
          onKeyPress={handleKeyPress}
        />
        {passwordError && <div className="error-box">{passwordError}</div>}

        <button 
          onClick={handleLogin} 
          disabled={!!emailError || !!passwordError || !email || !password}
        >
          Login
        </button>

        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
