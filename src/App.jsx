import "./App.css";


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Dashboard from "./components/Dashboard";
import AccountSettings from "./components/AccountSettings";

function App() {
  return (
    <Router>
     {/* <nav>
        <Link to="/">Login</Link> | 
        <Link to="/signup">Sign Up</Link> | 
        <Link to="/dashboard">Dashboard</Link> | 
        <Link to="/settings">Account Settings</Link>
      </nav>*/}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
