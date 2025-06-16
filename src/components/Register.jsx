import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
  
    const newUser = {
      username: form.name,
      email: form.email,
      password: form.password,
    };
  
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("Registration successful!");
        // Optionally redirect to login or home page
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong while registering");
    }
  };
  
  return (
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>
      <form onSubmit={handleRegister} className="auth-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="auth-input"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="auth-input"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="auth-input"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="auth-button">Register</button>
        <p className="auth-switch">
           Already have an account? <Link to="/login">Login</Link>
        </p>

      </form>
    </div>
  );
}

export default Register;
