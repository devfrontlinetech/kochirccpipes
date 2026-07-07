import React, { useState } from "react";
import {
  FaStar,
  FaWhatsapp,
  FaArrowRight,
  FaCubes,
  FaShieldAlt,
  FaSpinner,
} from "react-icons/fa";
import "../../assets/css/landing/products.css";

//  Product images imported as modules for better bundling and caching
import Img1 from "../../assets/images/products/pro-07.jpg";
import Img2 from "../../assets/images/products/pro-01.jpg";
import Img3 from "../../assets/images/products/pro-02.jpg";
import Img4 from "../../assets/images/products/pro-03.jpg";
import Img5 from "../../assets/images/products/pipe-05.jpg";
import Img6 from "../../assets/images/products/pipe-06.jpg";
import Img7 from "../../assets/images/products/pro-04.jpg";
import Img8 from "../../assets/images/products/pro-05.jpg";
import Img9 from "../../assets/images/products/pro-06.jpg";
import Img10 from "../../assets/images/products/pipe-10.jpg";
import Img11 from "../../assets/images/products/pipe-11.jpg";
import Img12 from "../../assets/images/products/pro-08.jpg";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "NP3 Class RCC Pipe",
    price: "₹4,500",
    unit: "m",
    rating: 5,
    image: Img1,
    specs: ["IS 458:2003", "Heavy Drainage", "High Load"],
  },
  {
    id: 2,
    name: "Precast Concrete Manhole",
    price: "₹8,200",
    unit: "pc",
    rating: 5,
    image: Img2,
    specs: ["M30 Concrete", "Interlocking", "Ready Use"],
  },
  {
    id: 3,
    name: "Precast Box Culvert",
    price: "₹18,500",
    unit: "blk",
    rating: 4,
    image: Img3,
    specs: ["Custom Sizes", "Expressways", "Fast Install"],
  },
  {
    id: 4,
    name: "Precast Concrete Slab",
    price: "₹3,200",
    unit: "m²",
    rating: 4,
    image: Img4,
    specs: ["M25 Concrete", "Flooring", "Rapid Build"],
  },
  {
    id: 5,
    name: "Precast Concrete Beam",
    price: "₹12,000",
    unit: "m",
    rating: 5,
    image: Img5,
    specs: ["M30 Concrete", "Structural Support", "Custom L"],
  },
  {
    id: 6,
    name: "Precast Concrete Column",
    price: "₹10,500",
    unit: "m",
    rating: 5,
    image: Img6,
    specs: ["M30 Grade", "Load Bearing", "Tailored Dim"],
  },
  {
    id: 7,
    name: "Precast Concrete Staircase",
    price: "₹25,000",
    unit: "set",
    rating: 4,
    image: Img7,
    specs: ["M30 Concrete", "Custom Designs", "Quick Install"],
  },
  {
    id: 8,
    name: "Precast Concrete Wall Panel",
    price: "₹5,500",
    unit: "m²",
    rating: 4,
    image: Img8,
    specs: ["M30 Concrete", "Partitioning", "Quick Install"],
  },
  {
    id: 9,
    name: "Precast Concrete Staircase",
    price: "₹25,000",
    unit: "set",
    rating: 4,
    image: Img9,
    specs: ["M30 Concrete", "Custom Designs", "Quick Install"],
  },

  {
    id: 10,
    name: "Custom Precast Solutions",
    price: "Varies",
    unit: "Contact Us",
    rating: 5,
    image: Img10,
    specs: ["Tailored to Blueprint", "Express Fabrication", "On-Site Delivery"],
  },
  {
    id: 11,
    name: "Custom Precast Solutions",
    price: "Varies",
    unit: "Contact Us",
    rating: 5,
    image: Img11,
    specs: ["Tailored to Blueprint", "Express Fabrication", "On-Site Delivery"],
  },
  {
    id: 12,
    name: "Custom Precast Solutions",
    price: "Varies",
    unit: "Contact Us",
    rating: 5,
    image: Img12,
    specs: ["Tailored to Blueprint", "Express Fabrication", "On-Site Delivery"],
  },
];

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const handleInquiry = (productName, productPrice) => {
    const businessNumber = "9194865 44451";
    const baseMessage = `Hello Trust Construction, I am interested in your "${productName}" listed at ${productPrice}. Please send over a comprehensive catalog and commercial quotation.`;

    window.open(
      `https://wa.me/${businessNumber}?text=${encodeURIComponent(baseMessage)}`,
      "_blank",
    );
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate a brief industrial processing delay for smooth UI feedback
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 3);
      setIsLoading(false);
    }, 600);
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Section Title Header Layout */}
        <div className="products-header">
          <span className="section-tag">OUR CATALOG</span>
          <h2>Engineered for Strength, Built for Scale</h2>
          <p>
            Explore our IS-certified heavy infrastructure assets manufactured
            using premium high-strength concrete matrices.
          </p>
        </div>

        {/* Dynamic Map Grid Array */}
        <div className="products-grid">
          {PRODUCT_DATA.slice(0, visibleCount).map((product) => (
            <div className="product-card compact" key={product.id}>
              {/* Card Image Cover Visual Frame */}
              <div className="product-image-box">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="category-tag">Premium</span>
              </div>

              {/* Card Main Body Content */}
              <div className="product-details">
                <div className="rating-row">
                  <div className="stars">
                    {[...Array(product.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                  <span className="rating-text">{product.rating}.0</span>
                </div>

                <h3 className="product-title">{product.name}</h3>

                {/* Compact Flex-Tag Specifications instead of vertical lists */}
                <div className="product-specs-tags">
                  {product.specs.map((spec, index) => (
                    <span key={index} className="spec-tag-item">
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Pricing Block & Layout */}
                <div className="price-container">
                  <div className="price-value">
                    {product.price}{" "}
                    <span className="price-unit">/ {product.unit}</span>
                  </div>
                </div>

                {/* Instant Action Trigger Button */}
                <button
                  type="button"
                  className="product-whatsapp-btn"
                  onClick={() => handleInquiry(product.name, product.price)}
                >
                  <FaWhatsapp className="wa-icon" />
                  <span>Get Quote</span>
                  <FaArrowRight className="arrow-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button Interactive Block */}
        {visibleCount < PRODUCT_DATA.length && (
          <div className="load-more-container">
            <button
              className={`load-more-btn ${isLoading ? "loading" : ""}`}
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="spinner-icon" />
                  <span>Processing Assets...</span>
                </>
              ) : (
                <>
                  <span>Load More Systems</span>
                  <FaArrowRight />
                </>
              )}
            </button>
          </div>
        )}

        {/* Dynamic Footer Trust Signals */}
        <div className="products-trust-banner">
          <div>
            <FaCubes /> Custom configurations available on blueprint request
          </div>
          <div>
            <FaShieldAlt /> All materials pass rigorous hydrostatic validation
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
