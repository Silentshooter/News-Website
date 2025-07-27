// src/Components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="site-container">
      <header className="header-layer">
        <div className="header-top">
          <div className="logo">
            <h1>Trendy News</h1>
            <p className="tagline">Your Source for the Latest Updates</p>
          </div>
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a> {/* Added Contact Us link */}
            </li>
          </ul>
        </nav>
      </header>

      <section className="about-us-layer">
        <div className="about-us-content">
          <h2 className="about-us-title">About Trendy News</h2>
          <p className="about-us-intro">
            Welcome to <strong>Trendy News</strong>, your trusted source for timely, accurate, and engaging news from around the globe. Founded in 2025, our mission is to empower readers with the knowledge they need to stay informed and make sense of the world around them.
          </p>

          <div className="about-us-mission">
            <h3>Our Mission</h3>
            <p>
              At Trendy News, we believe in the power of journalism to drive change, spark conversations, and connect communities. We are committed to delivering high-quality news coverage across a wide range of topics, including politics, sports, entertainment, health, and more. Our goal is to provide you with unbiased, well-researched content that you can rely on.
            </p>
          </div>

          <div className="about-us-team">
            <h3>Our Team</h3>
            <p>
              Our team consists of passionate journalists, editors, and tech enthusiasts who work tirelessly to bring you the latest updates. With diverse backgrounds and a shared commitment to excellence, we strive to uphold the highest standards of journalistic integrity.
            </p>
            <div className="team-members">
              <div className="team-member">
                <img src="https://via.placeholder.com/150" alt="Team Member 1" />
                <h4>Jane Doe</h4>
                <p>Editor-in-Chief</p>
              </div>
              <div className="team-member">
                <img src="https://via.placeholder.com/150" alt="Team Member 2" />
                <h4>John Smith</h4>
                <p>Senior Reporter</p>
              </div>
              <div className="team-member">
                <img src="https://via.placeholder.com/150" alt="Team Member 3" />
                <h4>Emily Brown</h4>
                <p>Tech Specialist</p>
              </div>
            </div>
          </div>

          <div className="about-us-vision">
            <h3>Our Vision</h3>
            <p>
              We envision a world where access to reliable news is a fundamental right. By leveraging cutting-edge technology and a reader-first approach, we aim to redefine the digital news experience, making it more accessible, engaging, and impactful for audiences worldwide.
            </p>
          </div>

          <div className="about-us-contact">
            <h3>Get in Touch</h3>
            <p>
              We’d love to hear from you! Whether you have feedback, a story tip, or just want to say hello, reach out to us at <a href="mailto:contact@trendynews.com">contact@trendynews.com</a> or visit our <a href="/contact-us">Contact Us</a> page.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer-layer">
        <div className="footer-content">
          <p>© 2025 Trendy News. All rights reserved.</p>
          <div className="footer-links">
            <a href="/about-us">About Us</a> | <a href="/contact-us">Contact Us</a> |{' '}
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">Facebook</a> |{' '}
            <a href="#" aria-label="Twitter">Twitter</a> |{' '}
            <a href="#" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;