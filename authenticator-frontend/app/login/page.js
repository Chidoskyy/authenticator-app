// app/login/page.js
'use client';
import React, { useState } from 'react';
import './login.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    alert('Logged in with: ' + formData.email);
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input 
          type="email" 
          name="email"
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label>Password:</label>
        <input 
          type="password" 
          name="password"
          value={formData.password} 
          onChange={handleChange} 
          required 
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
