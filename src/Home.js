import React from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

let Home;
export default Home = () => (
  <div className="card">
    <div className="card-body bg-light">
      <div className="card-title h1">
        Pluralsight Administration
      </div>
      <div className="card-text mb-3">
        React, Redux and React Router for ultra-responsive web apps.
      </div>
      <Link to="/about" className="btn btn-primary">Learn More</Link>
    </div>
  </div>
);