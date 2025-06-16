import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('token', res.data.token);
  
      setMessage('Login successful');

      // Optionally: store token and redirect
      // localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
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
        <button type="submit" className="auth-button">Login</button>
        {message && <p className="auth-message">{message}</p>}
        <p className="auth-switch">
          Don't have an account? <Link to="/register">Create Account</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
