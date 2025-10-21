import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Oops! Page Not Found 😢</h2>
        <p className="notfound-text">
          Looks like this page has gone shopping... but never came back!
        </p>
        <Link to="/" className="notfound-button">
          🛒 Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
