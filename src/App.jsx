import React, { useState } from "react";
import Navbar from "./components/navabr/Navbar";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Product from "./components/product/Product";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      <Navbar
        onLogin={() => setShowLogin(true)}
        onSignup={() => setShowSignup(true)}
      />
      <Banner />
      <About />
      <Product />
      <Footer />

      {/* Login modal */}
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <button className="close" onClick={() => setShowLogin(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Signup modal */}
      {showSignup && (
        <div className="modal">
          <div className="modal-content">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
            <button className="close" onClick={() => setShowSignup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
