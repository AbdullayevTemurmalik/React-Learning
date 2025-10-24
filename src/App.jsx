import React from "react";
import "./App.css";

import Navbar from "./components/navabr/Navbar";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Product from "./components/product/Product";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Product />
      <Footer />
    </>
  );
};

export default App;
