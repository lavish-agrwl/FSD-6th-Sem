import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flipkart-navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <span className="logo-text">Flipkart</span>
          <span className="logo-subtext">
            Explore <span className="plus">Plus</span>
          </span>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="search-input"
          />
          <button className="search-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6 12.6L15.5 16.5M13.5 7.5C13.5 10.8137 10.8137 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="navbar-actions">
          <button className="navbar-btn login-btn">Login</button>
          <div className="navbar-link">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C5.51472 0 3.5 2.01472 3.5 4.5C3.5 6.98528 5.51472 9 8 9C10.4853 9 12.5 6.98528 12.5 4.5C12.5 2.01472 10.4853 0 8 0ZM0 14.5C0 11.1863 2.68629 8.5 6 8.5H10C13.3137 8.5 16 11.1863 16 14.5V16H0V14.5Z" />
            </svg>
            <span>Become a Seller</span>
          </div>
          <div className="navbar-link">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 13.5L12 10M8.5 0.5V4.5M8.5 4.5L11.5 1.5M8.5 4.5L5.5 1.5M2 5.5C2 4.39543 2.89543 3.5 4 3.5H5.5M13.5 12.5V13C13.5 14.3807 12.3807 15.5 11 15.5H4C2.61929 15.5 1.5 14.3807 1.5 13V8C1.5 6.61929 2.61929 5.5 4 5.5H11C12.3807 5.5 13.5 6.61929 13.5 8V8.5" />
            </svg>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
