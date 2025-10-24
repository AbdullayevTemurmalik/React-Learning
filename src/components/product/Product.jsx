import React from "react";
import "./Product.css";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "$999",
    img: "https://dummyjson.com/image/i/products/2/1.jpg",
  },
  {
    id: 2,
    name: "Samsung Watch",
    price: "$199",
    img: "https://dummyjson.com/image/i/products/9/1.jpg",
  },
  {
    id: 3,
    name: "MacBook Air",
    price: "$1299",
    img: "https://dummyjson.com/image/i/products/6/1.jpg",
  },
  {
    id: 4,
    name: "Sony Headphones",
    price: "$299",
    img: "https://dummyjson.com/image/i/products/10/1.jpg",
  },
];

const Product = () => {
  return (
    <section className="product-section">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
