import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTruckMoving,
  FaDraftingCompass,
  FaMicroscope,
  FaIndustry,
} from "react-icons/fa";

import "../../assets/css/landing/infrastructure.css";

const INFRA_FACILITIES = [
  {
    id: 1,
    icon: <FaIndustry />,
    title: "Automated Batching Plants",
    description:
      "Computerized PLC-controlled concrete mixing units ensuring absolute material consistency, optimal water-cement ratio, and uniform matrix strength across high-volume production cycles.",
  },
  {
    id: 2,
    icon: <FaMicroscope />,
    title: "VGA Testing Laboratories",
    description:
      "Equipped with state-of-the-art three-edge bearing testing frames, compression testing machines (CTM), and permeability testing equipment to guarantee compliance with rigorous IS 458 codes.",
  },
  {
    id: 3,
    icon: <FaTruckMoving />,
    title: "Heavy Logistic Fleet",
    description:
      "A proprietary deployment infrastructure consisting of high-capacity gantry cranes, specialized heavy-haul transport trailers, and transit mixers to execute streamlined, damage-free field deliveries.",
  },
];

const Infrastructure = () => {
  const [activeFacility, setActiveFacility] = useState(0);

  return (
    <section id="infrastructure" className="infra-section">
      <div className="container">
        {/* Top Header Layout */}
        <div className="infra-header">
          <span className="section-tag">PRODUCTION CAPABILITIES</span>
          <h2>Heavy Engineering Systems Driven by Technology</h2>
          <p>
            Our manufacturing yards and processing loops are optimized for
            large-scale municipal, highway, and commercial mega-projects
            requiring exceptional concrete structural load tolerances.
          </p>
        </div>

        {/* Content Split Body Wrapper */}
        <div className="infra-content-grid">
          {/* Left Column: Interactive Technical Cards */}
          <div className="infra-cards-panel">
            {INFRA_FACILITIES.map((facility, index) => (
              <div
                key={facility.id}
                className={`infra-card-item ${activeFacility === index ? "active" : ""}`}
                onClick={() => setActiveFacility(index)}
              >
                <div className="infra-card-icon-frame">{facility.icon}</div>
                <div className="infra-card-text">
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Blueprint Dashboard Frame */}
          <div className="infra-blueprint-display">
            <div className="blueprint-mesh-bg"></div>

            <div className="blueprint-overlay-card">
              <div className="blueprint-header-strip">
                <FaDraftingCompass className="blueprint-icon" />
                <span>FACTORY SPECIFICATION SHEET // LINE_ENG_04</span>
              </div>

              <div className="blueprint-metrics-grid">
                <div className="b-metric">
                  <span className="b-label">Total Land Area</span>
                  <span className="b-value">12.5 Acres</span>
                </div>
                <div className="b-metric">
                  <span className="b-label">Monthly Yield Capacity</span>
                  <span className="b-value">45,000 Meters</span>
                </div>
                <div className="b-metric">
                  <span className="b-label">Concrete Grades Used</span>
                  <span className="b-value">M25 to M60</span>
                </div>
                <div className="b-metric">
                  <span className="b-label">Reinforcement Rigidity</span>
                  <span className="b-value">Fe 500 / 550 TMT</span>
                </div>
              </div>

              <div className="blueprint-footer-note">
                <FaCheckCircle className="check-icon" />
                <span>
                  All operations closely match ISO 14001 environmental safety
                  policies.
                </span>
              </div>
            </div>

            {/* Subtle structural visual elements */}
            <div className="deco-crosshair ch-top-left"></div>
            <div className="deco-crosshair ch-bottom-right"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
