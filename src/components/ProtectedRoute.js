import React from 'react';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return (
      <div className="protected-route">
        <div className="access-denied">
          <h2>Access Denied 🔒</h2>
          <p>Please login to access this page.</p>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
