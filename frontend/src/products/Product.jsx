
import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Backend se fetch karna
  useEffect(() => {
    fetch("http://localhost:3000/products") // backend URL
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {products.map((p) => (
        <div
          key={p.id}
          className="group w-[260px] p-3 rounded-lg shadow transition-all duration-500 hover:scale-105"
        >
          {/* Product Image */}
          <img
            src={p.img}
            alt={p.title}
            className="w-full h-[260px] object-cover rounded"
          />

          {/* Product Title */}
          <h3 className="text-lg font-semibold mt-2">{p.title}</h3>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(p)}
            className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
          {/* Hover Info */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-3">
            <p><strong>Price:</strong> ${p.price}</p>
            <p className="text-sm"><strong>Description:</strong> {p.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
