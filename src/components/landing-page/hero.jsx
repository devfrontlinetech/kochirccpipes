import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import HeroVideo from "../../assets/videos/hero-01.mp4";
import "../../assets/css/landing/hero.css";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const categories = ["Residential", "Commercial", "Hospitality", "Retail"];

  return (
    <section className="hero-section">
      {/* Background Video */}

      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={HeroVideo} type="video/mp4" />
      </video>

      {/* Video Dark Overlay */}

      <div className="hero-video-overlay"></div>

      {/* Content */}

      <div className="hero-content">
        <h1>
          Transforming Spaces
          <br />
          Into Extraordinary
          <br />
          Experiences
        </h1>

        <p>
          Award-winning interior design studio crafting timeless, sophisticated
          environments for discerning clients across residential, commercial,
          and hospitality sectors.
        </p>

        <div className="categories">
          {categories.map((item, index) => (
            <div
              key={index}
              className={index === 0 ? "category active" : "category"}
            >
              <FaCheckCircle />

              {item}

              <span>({index + 8})</span>
            </div>
          ))}
        </div>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => scrollToSection("products")}
          >
            View Products
            <FaArrowRight />
          </button>

          <button
            className="secondary-btn"
            onClick={() => scrollToSection("contact")}
          >
            Book Orders
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
