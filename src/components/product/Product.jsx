import React from "react";
import "./Product.css";

const data = [
  {
    id: 1,
    name: "Smart Watch",
    price: "$89",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: "$59",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Smartphone",
    price: "$499",
    img: "https://via.placeholder.com/150",
  },
];

const Product = () => {
  return (
    <section className="products" id="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {data.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
