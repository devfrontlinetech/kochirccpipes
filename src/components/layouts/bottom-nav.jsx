import React, { useState } from "react";
import "../../assets/css/layout/bottom-nav.scss";

import {
  FaHome,
  FaShoppingCart,
  FaBriefcase,
  FaUsers,
  FaEnvelopeOpenText,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

function Bottomnav({ onMenuClick }) {
  const [active, setActive] = useState("home");

  const menus = [
    {
      id: "home",
      label: "Home",
      icon: <FaHome />,
    },
    {
      id: "products",
      label: "Products",
      icon: <FaShoppingCart />,
    },
    {
      id: "infrastructure",
      label: "Projects",
      icon: <FaBriefcase />,
    },
    {
      id: "clients",
      label: "Clients",
      icon: <FaUsers />,
    },
    {
      id: "contact",
      label: "Contact",
      icon: <FaEnvelopeOpenText />,
    },
  ];

  const handleMenuClick = (id) => {
    setActive(id);

    if (onMenuClick) {
      onMenuClick(id);
    }
  };

  return (
    <>
      {/* =====================================================
          IOS LIQUID GLASS BOTTOM NAV
      ===================================================== */}

      <nav className="ios-bottom-nav" aria-label="Bottom navigation">
        <div className="ios-bottom-nav__inner">
          {menus.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`ios-nav-item ${active === item.id ? "active" : ""}`}
              onClick={() => handleMenuClick(item.id)}
              aria-label={item.label}
            >
              {/* Active Liquid Glass Capsule */}
              {active === item.id && (
                <span className="ios-nav-item__active-glass" />
              )}

              <span className="ios-nav-item__icon">{item.icon}</span>

              <span className="ios-nav-item__label">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="ios-floating-contact ios-whatsapp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* =====================================================
          FLOATING CALL
      ===================================================== */}

      <a
        href="tel:1234567890"
        className="ios-floating-contact ios-call"
        aria-label="Call"
      >
        <FaPhoneAlt />
      </a>
    </>
  );
}

export default Bottomnav;
