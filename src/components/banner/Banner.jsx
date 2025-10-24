import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <div className="banner-content">
        <h1>Welcome to MiniShop</h1>
        <p>Your favorite place to find stylish and modern products!</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default Banner;
