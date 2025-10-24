import React from "react";
import "./Navbar.css";

const Navbar = ({ onLogin, onSignup }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">MoonSite</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
      <div className="nav-buttons">
        <button onClick={onLogin}>Login</button>
        <button onClick={onSignup}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
