import React from 'react';

const About = () => {
  const aboutStyle = {
    backgroundColor: 'transparent',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '500px'
};

  const headingStyle = {
    color: '#333',
    fontSize: '24px',
    textAlign: 'center',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    fontSize: '18px',
  };

  const listItemStyle = {
    padding: '8px 0',
    color: '#555',
  };

  return (
    <div style={aboutStyle}>
      <h3 style={headingStyle}>We will Provide</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>Customer and Inventory Management</li>
        <li style={listItemStyle}>Real-time Reports</li>
        <li style={listItemStyle}>Quick Invoicing</li>
      </ul>
    </div>
  );
};

export default About;
