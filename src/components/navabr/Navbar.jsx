import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo">Moon</h1>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
