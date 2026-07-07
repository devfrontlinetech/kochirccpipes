import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../../assets/css/layout/header-top.css";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container header-top-container">
        {/* Left Side: Corporate Operational Signals */}
        <div className="header-top-left">
          <div className="top-info-item">
            <FaClock className="top-icon pulse-green" />
            <span>
              Factory Status:{" "}
              <strong className="status-tag">Operational</strong> (8 AM - 6 PM)
            </span>
          </div>
          <div className="top-info-item hide-mobile">
            <FaMapMarkerAlt className="top-icon" />
            <span>HQ: Kochi, KL</span>
          </div>
        </div>

        {/* Right Side: Instant Communication Links */}
        <div className="header-top-right">
          <a href="tel:+919486544451" className="top-link">
            <FaPhoneAlt className="top-icon" />
            <span>+91 94865 44451</span>
          </a>

          <span className="top-divider">|</span>

          <a href="mailto:info@kochirccpipes.in" className="top-link">
            <FaEnvelope className="top-icon" />
            <span>info@kochirccpipes.in</span>
          </a>

          <span className="top-divider hide-tablet">|</span>

          <div className="top-language-badge hide-tablet">
            <span className="country-flag">🇮🇳</span>
            <span>B2B India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
