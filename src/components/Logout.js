// logout.js

import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Clear local storage
    window.localStorage.clear();
    localStorage.setItem('authToken', '');
    localStorage.setItem('username', '');

    // Redirect to the home page (replace with your actual home page URL)
    window.location.href = '/home';
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;