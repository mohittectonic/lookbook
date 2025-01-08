import React from "react";
import "./ProductCarousel.css";

function ProductCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {[1, 2, 3].map((item) => (
          <div key={item} className="product-card">
            Card {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;