// main.js

import React from 'react';

function Main() {
  // Retrieve the username from local storage
  const username = localStorage.getItem('username');

  if (!username) {
    // If the username is not available, redirect to the login page
    window.location.href = '/login';
    return null;
  }
    const homeContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    textAlign: 'center'
  };
  return (
    <div style={homeContainerStyle}>
      <h1>Welcome, {username}!</h1>
      {/* Add other content specific to your main page */}
    </div>
  );
}

export default Main;
