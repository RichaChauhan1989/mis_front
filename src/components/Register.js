import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('\n' +
          'https://mis-back-snowy.vercel.app/chat/api/userprofiles/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
     debugger;
      if (response.ok) {
        alert('User registered successfully!');
        window.location.href = 'home';


        // Redirect to a success page or handle as needed
      } else {
        console.error('Registration failed. Please check your input.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const loginContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',
  textAlign: 'center',
  flexDirection: 'column',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const labelStyle = {
  width: '150px',
  textAlign: 'right',
  marginRight: '10px'
};

const inputStyle = {
  marginBottom: '10px',
  padding: '8px',
  fontSize: '16px',
  width: '200px'  // Set a fixed width
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer'
};



  return (
    <div style={loginContainerStyle} >
      <p>
      <h2>Registeration Form</h2>
      </p>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={{display: 'flex', alignItems: 'center', marginBottom: ''}}>
          <p><label htmlFor="username" style={labelStyle}>Username</label>
            <input
                type="text"
                name="username"
                placeholder="enter your name"
                value={formData.username}
                onChange={handleChange} style={inputStyle}
            />
          </p>
        </div>
        <div style={{display: 'flex', alignItems: 'center', marginBottom: ''}}>
          <p><label htmlFor="email" style={labelStyle}>Email</label>
            <input
                type="email"
                name="email"
                placeholder="enter email"
                value={formData.email}
                onChange={handleChange} style={inputStyle}
            />
          </p>
        </div>
        <div style={{display: 'flex', alignItems: 'center', marginBottom: ''}}>
          <p><label htmlFor="password" style={labelStyle}>Password</label>
            <input
                type="password"
                name="password"
                placeholder="enter password"
                value={formData.password}
                onChange={handleChange} style={inputStyle}
            />
          </p>
        </div>

          <p>
            <button type="submit" style={buttonStyle}>Register</button>
          </p>
      </form>
    </div>
);
};

export default RegistrationForm;