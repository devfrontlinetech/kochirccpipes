import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaHeadset,
} from "react-icons/fa";
import "../../assets/css/landing/hero.css"; // Assuming this is kept for global layout
import "../../assets/css/landing/contact-us.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-wrapper">
      {/* Subtle Calm Background Elements */}
      <div className="calm-bg-shape shape-top-left"></div>
      <div className="calm-bg-shape shape-bottom-right"></div>

      <div className="contact-container">
        {/* LEFT CONTENT: Text, Contact Info & MAP */}
        <div className="contact-info-panel">
          <div className="contact-badge-row">
            <span className="contact-kicker">GET IN TOUCH</span>
            <span className="contact-status-pill">
              <FaHeadset /> 24/7 Support
            </span>
          </div>

          <h2 className="contact-heading">
            Let's Build Something{" "}
            <span className="text-accent-calm">Together</span>
          </h2>

          <p className="contact-description">
            Have a project in mind? Fill out the form, and our specialists will
            get back to you within 24 hours to discuss how we can help.
          </p>

          <div className="contact-details-grid">
            <div className="contact-detail-item">
              <div className="detail-icon-wrapper">
                <FaMapMarkerAlt className="detail-icon" />
              </div>
              <div className="detail-text">
                <h3>Our Office</h3>
                <p>
                  7/151, Vikasavani-Thevakkal Road, Thengod Near Infopark
                  Kakkaanad, Kochi, Kerala 682021
                </p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon-wrapper">
                <FaPhoneAlt className="detail-icon" />
              </div>
              <div className="detail-text">
                <h3>Phone Number</h3>
                <p>+91 94865 44451</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon-wrapper">
                <FaEnvelope className="detail-icon" />
              </div>
              <div className="detail-text">
                <h3>Email Address</h3>
                <p>info@kochirccpipes.in</p>
              </div>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="contact-map-container">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125714.08387470136!2d76.26496042667381!3d10.052698332414392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d00bd15d35f%3A0x38f2f3840153a17!2sKochi%20RCC%20Cement%20Pipe%20company%20-%20Cochin!5e0!3m2!1sen!2sin!4v1783402286302!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* RIGHT CONTENT: Calm Contact Form */}
        <div className="contact-form-panel">
          <div className="contact-form-surface">
            <div className="form-accent-line"></div>
            <form onSubmit={handleSubmit} className="calm-contact-form">
              <div className="form-split-row">
                <div className="form-field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about your project..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit-calm">
                Send Message <FaPaperPlane className="btn-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
