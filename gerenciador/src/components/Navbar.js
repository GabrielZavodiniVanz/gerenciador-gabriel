import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link className="home-link" to="/">Home</Link></li>
        <li className="navbar-item"><Link className="dashboard-link" to="/dashboard">Dashboard</Link></li>
        <li className="navbar-item"><Link className="sobre-link" to="/sobre">Sobre</Link></li>
        <li className="navbar-item"><Link className="login-link" to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
