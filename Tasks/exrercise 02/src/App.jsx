import { useState } from "react";
import ProductCard from "./ProductCard";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 85000,
      stock: 5,
    },
    {
      id: 2,
      name: "Mouse",
      category: "Accessories",
      price: 1500,
      stock: 0,
    },
    {
      id: 3,
      name: "Keyboard",
      category: "Accessories",
      price: 3500,
      stock: 10,
    },
    {
      id: 4,
      name: "Monitor",
      category: "Electronics",
      price: 25000,
      stock: 3,
    },
    {
      id: 5,
      name: "USB Cable",
      category: "Accessories",
      price: 700,
      stock: 15,
    },
  ];

  function addToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="container">
      <h1>Product Catalog</h1>

      <h2>🛒 Total Cart Items: {cartCount}</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;