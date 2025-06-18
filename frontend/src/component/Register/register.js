import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css';

function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    mobile: '',
    employeecode: '',
    birthdate: '',
    emailid: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', form);

      localStorage.setItem("user", JSON.stringify({ username: form.username }));

      alert('Registered successfully!');
      navigate('/');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        <input className="form-input" placeholder="UserName" onChange={(e) => setForm({ ...form, username: e.target.value })} required />
        <input className="form-input" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <input className="form-input" type="number" placeholder="Mobile Number" onChange={(e) => setForm({ ...form, mobile: e.target.value })} required />
        <input className="form-input" type="text" placeholder="Employee Code" onChange={(e) => setForm({ ...form, employeecode: e.target.value })} required />
        <input className="form-input" type="date" placeholder="Birth Date" onChange={(e) => setForm({ ...form, birthdate: e.target.value })} required />
        <input className="form-input" type="email" placeholder="Email" onChange={(e) => setForm({ ...form, emailid: e.target.value })} required />
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
}

export default Register;
