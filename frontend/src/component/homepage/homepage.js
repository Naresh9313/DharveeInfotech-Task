

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
      return;
    }

    setUser(storedUser);
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="homepage-container">
      <div className="welcome-card">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
        <h2>👋 Welcome, {user?.username}</h2>
        <p>Here are your assigned tasks:</p>
      </div>

      {tasks.length === 0 ? (
        <p className="no-task-msg">No tasks assigned yet.</p>
      ) : (
        <div className="task-list">
          {tasks.map((item, index) => (
            <div key={index} className="task-card">
              <h4>📌 {item.task}</h4>
              <p><strong>⏰ Time Slot:</strong> {item.timeSlot}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
