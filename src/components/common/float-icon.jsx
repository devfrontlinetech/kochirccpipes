import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "../../assets/css/common/float.css";

const FloatingContact = () => {
  const phone = "+917200247247";
  const whatsapp = "917200247247";

  return (
    <div className="floating-contact">
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="float-btn whatsapp"
      >
        <FaWhatsapp />
      </a>

      <a href={`tel:${phone}`} className="float-btn call">
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default FloatingContact;
