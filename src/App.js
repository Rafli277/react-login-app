import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('username');
    const token = localStorage.getItem('token');

    if (savedUser && token) {
      setIsAuthenticated(true);
      setUsername(savedUser);
    }
  }, []);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUsername(user);
    localStorage.setItem('user', user);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Dashboard username={username} onLogout={handleLogout} />
        </ProtectedRoute>
      )}
    </div>
  );
}

export default App;
