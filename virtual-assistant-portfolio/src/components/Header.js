// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Sulayman Adebayo</div>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
