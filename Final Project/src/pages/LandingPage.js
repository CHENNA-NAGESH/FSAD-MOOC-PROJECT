import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Welcome to Our Houseplant Store</h1>
      <p>Find the best indoor plants to brighten your home!</p>
      <Link to="/products" className="btn">Get Started</Link>
    </div>
  );
};

export default LandingPage;
