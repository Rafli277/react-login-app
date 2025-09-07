import React, { useState } from 'react';
import '../styles/Login.css';

const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        // Save to localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('role', data.role);

        onLogin(data.username);
        setError('');
      } else {
        setError(data.message || 'Login failed. Please check credentials.');
      }
    } catch (error) {
      setError('Network error. Please check if backend is running on port 8080.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={credentials.username} onChange={handleChange} placeholder="Enter username" required disabled={isLoading} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Enter password" required disabled={isLoading} />
        </div>

        <button type="submit" className="login-button" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Sign In'}
        </button>

        <div className="demo-credentials">
          <p>Demo credentials:</p>
          <p>
            Username: <strong>admin</strong> or <strong>user</strong>
          </p>
          <p>
            Password: <strong>password</strong>
          </p>
        </div>

        <div className="backend-info">
          <p>🔌 Make sure Spring Boot backend is running on port 8080</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
