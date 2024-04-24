import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from './logo.png';  

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src={logo} alt="Samco Machinery Logo" style={{ width: '200px' }} />
        <h1>Welcome to Employee Training Dashboard</h1>
        <p>Access your training modules and enhance your skills.</p>
      </header>
      <nav>
        <Link to="/modules" className="view-modules-btn">Access Training Modules</Link>
      </nav>
    </div>
  );
};

export default HomePage;
