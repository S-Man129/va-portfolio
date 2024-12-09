// src/components/Services.js
import React from "react";
import { FaEnvelope, FaCalendar, FaKeyboard } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>My Services</h2>
      <div className="service-list">
        <div className="service-item">
          <FaEnvelope /> Email Management
        </div>
        <div className="service-item">
          <FaCalendar /> Calendar Management
        </div>
        <div className="service-item">
          <FaKeyboard /> Data Entry
        </div>
      </div>
    </section>
  );
};

export default Services;
