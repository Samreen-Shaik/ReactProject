import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Dashboard() {
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h1>🎉 Welcome to Your Dashboard! 🎉</h1>
      <p className="dashboard-subtext">
        Here, you can manage your account settings, track progress, and explore new features.
      </p>

      <button className="dashboard-btn" onClick={() => navigate("/settings")}>
        ⚙️ Go to Account Settings
      </button>

      <button className="logout-btn" onClick={handleLogout}>🚪 Logout</button>
    </div>
  );
}

export default Dashboard;
