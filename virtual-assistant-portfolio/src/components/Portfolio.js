// src/components/Portfolio.js
import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">Project 1</div>
        <div className="portfolio-item">Project 2</div>
        <div className="portfolio-item">Project 3</div>
      </div>
    </section>
  );
};

export default Portfolio;
