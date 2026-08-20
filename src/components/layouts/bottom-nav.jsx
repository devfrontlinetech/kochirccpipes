import React, { useState } from "react";
import "../../assets/css/layout/bottom-nav.css";

import {
  FaHome,
  FaShoppingCart,
  FaBriefcase,
  FaUsers,
  FaEnvelopeOpenText,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

function Bottomnav({ onMenuClick, whatsappUrl = "", phoneUrl = "" }) {
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
      <nav className="ios-bottom-nav" aria-label="Mobile navigation">
        {/* Outer liquid glass shell */}
        <div className="ios-bottom-nav__glass">
          {/* Top reflection */}
          <span className="ios-bottom-nav__reflection" />

          {/* Inner glass highlight */}
          <span className="ios-bottom-nav__highlight" />

          {/* Navigation items */}
          <div className="ios-bottom-nav__inner">
            {menus.map((item) => {
              const isActive = active === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`ios-nav-item ${isActive ? "active" : ""}`}
                  onClick={() => handleMenuClick(item.id)}
                  aria-label={item.label}
                  aria-current={isActive ? "page" : undefined}
                >
                  {/* Active liquid capsule */}
                  {isActive && (
                    <>
                      <span className="ios-nav-item__active-glass" />
                      <span className="ios-nav-item__active-light" />
                    </>
                  )}

                  {/* Icon */}
                  <span className="ios-nav-item__icon">{item.icon}</span>

                  {/* Label */}
                  <span className="ios-nav-item__label">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Bottom reflection */}
          <span className="ios-bottom-nav__bottom-glow" />
        </div>
      </nav>

      {whatsappUrl && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ios-floating-contact ios-whatsapp"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      )}

      {phoneUrl && (
        <a
          href={phoneUrl}
          className="ios-floating-contact ios-call"
          aria-label="Call"
        >
          <FaPhoneAlt />
        </a>
      )}
    </>
  );
}

export default Bottomnav;
