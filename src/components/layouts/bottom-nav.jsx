import React, { useState } from "react";
import "../../assets/css/layout/bottom-nav.css";

import {
  FaHome,
  FaShoppingCart,
  FaBriefcase,
  FaUsers,
  FaEnvelopeOpenText,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa";

function Bottomnav({ onMenuClick }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="footer-radial-section">
      <div className={`corepipe-radial-menu ${open ? "active" : ""}`}>
        {/* Center Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Items with new icons */}
        <button className="menu-item item1" onClick={() => onMenuClick("home")}>
          <FaHome />
          {/* <span>Home</span> */}
        </button>

        <button
          className="menu-item item2"
          onClick={() => onMenuClick("products")}
        >
          <FaShoppingCart />
          {/* <span>Products</span> */}
        </button>

        <button
          className="menu-item item3"
          onClick={() => onMenuClick("infrastructure")}
        >
          <FaBriefcase />
          {/* <span>Projects</span> */}
        </button>

        <button
          className="menu-item item4"
          onClick={() => onMenuClick("clients")}
        >
          <FaUsers />
          {/* <span>Clients</span> */}
        </button>

        <button
          className="menu-item item5"
          onClick={() => onMenuClick("contact")}
        >
          <FaEnvelopeOpenText />
          {/* <span>Contact</span> */}
        </button>
      </div>

      {/* Floating Buttons */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      <a href="tel:1234567890" className="call-btn">
        <FaPhoneAlt />
      </a>
    </div>
  );
}

export default Bottomnav;
