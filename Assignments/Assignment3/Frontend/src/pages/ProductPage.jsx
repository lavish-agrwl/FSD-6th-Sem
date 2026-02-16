import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { products } from "../data/products";
import "./ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-page">
        <Navbar />
        <div className="not-found">
          <h2>Product not found</h2>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </div>
    );
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <div className="product-page">
      <Navbar />

      <div className="product-container">
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="action-buttons-left">
            <button className="btn btn-cart">ADD TO CART</button>
            <button className="btn btn-buy">BUY NOW</button>
          </div>
        </div>

        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>

          <div className="product-rating-section">
            <div className="rating-badge">{product.rating} ★</div>
            <span className="rating-count">
              {product.reviews.toLocaleString()} Ratings & Reviews
            </span>
          </div>

          <div className="special-offer">
            <span className="offer-text">Special offer</span>
          </div>

          <div className="price-section">
            <div className="current-price">
              ₹{product.price.toLocaleString()}
            </div>
            <div className="original-price">
              ₹{product.originalPrice.toLocaleString()}
            </div>
            <div className="discount-badge">{discount}% off</div>
          </div>

          <div className="product-section">
            <h3 className="section-title">Description</h3>
            <p className="product-description">{product.description}</p>
          </div>

          <div className="product-section">
            <h3 className="section-title">Key Features</h3>
            <ul className="features-list">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="product-section">
            <h3 className="section-title">Specifications</h3>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-label">Brand</span>
                <span className="spec-value">{product.category}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Model</span>
                <span className="spec-value">{product.name}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Category</span>
                <span className="spec-value">{product.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
