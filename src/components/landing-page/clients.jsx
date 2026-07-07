import React from "react";
// import {
//   FaQuoteLeft,
//   FaCheckCircle,
//   FaBuilding,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import "../../assets/css/landing/clients.css";

// Premium B2B Industry Clients Data Matrix
const B2B_CLIENTS = [
  { id: 1, name: "L&T Infrastructure", logoText: "L&T INFRA" },
  { id: 2, name: "NHAI National Highways", logoText: "NHAI" },
  { id: 3, name: "Tata Projects", logoText: "TATA PROJECTS" },
  { id: 4, name: "Adani Ports", logoText: "ADANI PORTS" },
  { id: 5, name: "Reliance Infra", logoText: "R-INFRA" },
  { id: 6, name: "Ircon International", logoText: "IRCON" },
];

// const INDUSTRIAL_TESTIMONIALS = [
//   {
//     id: 1,
//     quote:
//       "Trust Construction delivered 15,000 meters of NP3 Class RCC pipes within an incredibly tight schedule. Their material consistency and structural compliance under extreme testing benchmarks were exceptional.",
//     author: "Rajesh Kumar",
//     designation: "Chief Procurement Officer",
//     company: "Metro Rail Project Consortium",
//     projectScope: "Phase II Drainage Line",
//     location: "Bangalore, India",
//   },
//   {
//     id: 2,
//     quote:
//       "The structural precision of their precast box culverts saved our site crew over 45 days of on-field casting time. Absolute flawless load-bearing capacity for highway highway traffic systems.",
//     author: "M. Thangavel",
//     designation: "Sr. Project Director",
//     company: "State Highway Expansion Cell",
//     projectScope: "4-Lane Precast Culverts",
//     location: "Chennai Bypass",
//   },
// ];

const Clients = () => {
  return (
    <section id="clients" className="clients-section">
      <div className="container">
        {/* Section Header Layout */}
        <div className="clients-header">
          <span className="section-tag">TRUSTED BY ENTERPRISES</span>
          <h2>The Choice of India's Leading Infrastructure Builders</h2>
          <p>
            We deploy heavy structural assets to national highways, urban metro
            corridors, and heavy commercial zones backed by certified project
            delivery timelines.
          </p>
        </div>

        {/* ==========================================
           1. INFINITE LOGO MARQUEE TICKER 
           ========================================== */}
        <div className="logo-marquee-wrapper">
          <div className="logo-marquee-track">
            {/* Original Set */}
            {B2B_CLIENTS.map((client) => (
              <div className="logo-item" key={`orig-${client.id}`}>
                <FaBuilding className="marquee-logo-icon" />
                <span>{client.logoText}</span>
              </div>
            ))}

            {/* Cloned Duplicate Set for Seamless Continuous Infinite Scrolling Loop */}
            {B2B_CLIENTS.map((client) => (
              <div className="logo-item" key={`clone-${client.id}`}>
                <FaBuilding className="marquee-logo-icon" />
                <span>{client.logoText}</span>
              </div>
            ))}
          </div>
          {/* Edge Blur Gradients */}
          <div className="marquee-fade-left"></div>
          <div className="marquee-fade-right"></div>
        </div>

        {/* ==========================================
           2. PREMIUM REVIEWS CONTRACT MATRIX GRID 
           ========================================== */}
        {/* <div className="testimonials-grid">
          {INDUSTRIAL_TESTIMONIALS.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <div className="quote-icon-box">
                <FaQuoteLeft />
              </div>

              <p className="testimonial-text">"{item.quote}"</p> */}

              {/* Author Segment */}
              {/* <div className="author-meta-block">
                <div className="author-details">
                  <h4>{item.author}</h4>
                  <span className="author-title">{item.designation}</span>
                  <span className="author-company">{item.company}</span>
                </div>
              </div> */}

              {/* B2B Technical Blueprint Contract Summary Tag */}
              {/* <div className="contract-specs-footer">
                <div className="contract-tag">
                  <FaCheckCircle className="check-icon" />
                  <span>
                    <strong>Scope:</strong> {item.projectScope}
                  </span>
                </div>
                <div className="contract-tag">
                  <FaMapMarkerAlt className="map-icon" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Clients;
