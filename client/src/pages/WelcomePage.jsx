import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to My Website</h1>
      <p>This is a website with amazing features.</p>
      <p>Please sign in or sign up to explore more.</p>
      <div className="button-container">
        <Link to="/login" className="btn btn-primary">
          Sign In
        </Link>
        <Link to="/register" className="btn btn-secondary">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
