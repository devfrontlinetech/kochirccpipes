import React from "react";
import Logo from "../../assets/images/logo/logo-03.png";

import "../../assets/css/layout/header.css";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo-img" />
        </div>

        <nav className="nav-menu">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
          >
            Home
          </a>

          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#products");
            }}
          >
            Products
          </a>

          <a
            href="#infrastructure"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#infrastructure");
            }}
          >
            Infrastructure
          </a>

          <a
            href="#clients"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#clients");
            }}
          >
            Clients
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
          >
            Contact
          </a>
        </nav>

        <button
          className="quote-btn"
          onClick={() => scrollToSection("#contact")}
        >
          Get Quote
        </button>
      </div>
    </header>
  );
};

export default Header;
