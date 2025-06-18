
import React, { useState } from "react";
import "./admin.css";

function AdminPage() {
  const [task, setTask] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task || !timeSlot) {
      alert("Please fill in all fields.");
      return;
    }

    const newTask = { task, timeSlot };
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    existingTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    setTask("");
    setTimeSlot("");

    alert("✅ Task saved successfully!");
  };

  return (
    <div className="admin-container">
      <form className="admin-form" onSubmit={handleSubmit}>
        <h2 className="form-title">🗂️ Assign Task</h2>

        <label className="form-label">Task Description</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />

        <label className="form-label">Select Time Slot</label>
        <select
          className="form-input"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          required
        >
          <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
          <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
          <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
          <option value="4:00 PM - 6:00 PM">6:00 PM - 8:00 PM</option>
          <option value="4:00 PM - 6:00 PM">8:00 PM - 10:00 PM</option>
          <option value="4:00 PM - 6:00 PM">10:00 PM - 12:00 PM</option>
          <option value="4:00 PM - 6:00 PM">12:00 AM - 2:00 AM</option>
          <option value="4:00 PM - 6:00 PM">2:00 AM - 4:00 AM</option>
          <option value="4:00 PM - 6:00 PM">4:00 AM - 6:00 AM</option>
          <option value="4:00 PM - 6:00 PM">6:00 AM - 8:00 AM</option>
          <option value="4:00 PM - 6:00 PM">8:00 AM - 10:00 AM</option>
          <option value="4:00 PM - 6:00 PM">10:00 AM - 12:00 AM</option>


        </select>

        <button type="submit" className="submit-btn">Save Task</button>
      </form>
    </div>
  );
}

export default AdminPage;
