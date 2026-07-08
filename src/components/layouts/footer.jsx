import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import Logo from "../../assets/images/logo/logo-03.png";
import "../../assets/css/layout/footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="site-footer">
      {/* Upper Footer: Grid Content */}
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Identity */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img
                src={Logo}
                alt="Trust Construct"
                className="footer-logo-img"
              />
            </div>
            <p className="brand-description">
              Leading manufacturer of RCC pipes, box culverts, precast concrete
              products, drainage solutions, and infrastructure materials for
              government, industrial, and commercial projects.
            </p>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#twitter" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#linkedin" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2: Core Services Links */}
          <div className="footer-col Links-col">
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="#commercial">Commercial Building</a>
              </li>
              <li>
                <a href="#residential">Residential Design</a>
              </li>
              <li>
                <a href="#infrastructure">Infrastructure Projects</a>
              </li>
              <li>
                <a href="#renovation">Green Renovation</a>
              </li>
              <li>
                <a href="#management">Project Management</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Links */}
          <div className="footer-col Links-col">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#about">About Our Team</a>
              </li>
              <li>
                <a href="#portfolio">Our Portfolio</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#news">Latest Insights</a>
              </li>
              <li>
                <a href="#contact">Contact Support</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter CTA */}
          <div className="footer-col newsletter-col">
            <h3>Stay Updated</h3>
            <p className="newsletter-text">
              Subscribe to our newsletter to receive the latest updates on
              construction trends, project highlights, and corporate news.
            </p>
            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Your business email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Lower Footer: Copyright & Legal */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p className="copyright-text">
            Copyright {new Date().getFullYear()} Pigeon. Designed By{" "}
            <a
              href="https://frontlinetechnologies.org/"
              rel="noreferrer"
              target="_blank"
            >
              Frontline Technologies
            </a>
            . All Rights Reserved
          </p>
          <div className="bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
