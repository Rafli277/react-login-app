import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = ({ username, onLogout }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {username}! 🎉</h1>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="card">
          <h3>Dashboard Overview</h3>
          <p>This is a simple React.js showcase application.</p>
          <p>Successfully implemented:</p>
          <ul>
            <li>✅ React Hooks (useState)</li>
            <li>✅ Form handling</li>
            <li>✅ Conditional rendering</li>
            <li>✅ CSS styling</li>
            <li>✅ Component architecture</li>
          </ul>
        </div>

        <div className="card">
          <h3>Next Steps</h3>
          <p>This app can be extended with:</p>
          <ul>
            <li>🔒 JWT Authentication</li>
            <li>🌐 API Integration</li>
            <li>📱 Responsive Design</li>
            <li>🎨 UI Framework (Tailwind/Material-UI)</li>
            <li>🧪 Unit Testing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
