import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../index.css";

function CreateAccount() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
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
    setPasswordError(passwordValue.length >= 6 ? "" : "❌ Password must be at least 6 characters.");
  };

  // Handle Signup
  const handleSignup = () => {
    if (!emailError && !passwordError && name && email && password) {
      navigate("/dashboard"); // Redirect on successful signup
    }
  };

  // Handle Enter Key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSignup();
    }
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          onClick={handleSignup} 
          disabled={!name || !!emailError || !!passwordError || !email || !password}
        >
          Sign Up
        </button>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
