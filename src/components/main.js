// main.js

import React from 'react';

function Main() {
  // Retrieve the username from local storage
  const username = localStorage.getItem('username');

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      {/* Add other content specific to your main page */}
    </div>
  );
}

export default Main;
