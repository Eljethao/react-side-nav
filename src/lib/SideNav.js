import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css'; // Create a CSS file for styling

const SideNav = () => {
  return (
    <div className="sidenav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default SideNav;
