import React from 'react';
import '../Style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Shop Keeper</div>
      <ul className="nav-links">
        <li> Home</li>
        <li> Products</li>
        <li> Cart</li>
        <li> Contact</li>
      </ul>
    </nav>
  ); 
};

export default Navbar;