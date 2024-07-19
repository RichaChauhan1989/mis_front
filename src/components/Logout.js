// logout.js

import React from 'react';
// import { useHistory } from 'react-router-dom';

const Logout = () => {



  const handleLogout = () => {
    // Clear local storage
    window.localStorage.clear();
    window.location.href = '/Home';

    // localStorage.setItem('authToken', '')
    // localStorage.setItem('username', '');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};
export default Logout;