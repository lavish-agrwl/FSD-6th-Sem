import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= products.length ? 0 : prevIndex + 4,
    );
  };

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + 4);

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h2>Top Selection</h2>
        <button className="nav-button" onClick={handleNext}>
          →
        </button>
      </div>
      <div className="carousel-content">
        {visibleProducts.map((product) => {
          const discount = Math.round(
            ((product.originalPrice - product.price) / product.originalPrice) *
              100,
          );
          return (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleCardClick(product.id)}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-rating">
                  <span className="rating">{product.rating} ★</span>
                  <span className="reviews">({product.reviews})</span>
                </div>
                <div className="product-price">
                  <span className="price">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="original-price">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="discount">{discount}% off</span>
                </div>
                <p className="tagline">{product.tagline}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
