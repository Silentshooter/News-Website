// src/Components/ContactUs.js
import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  

  const [isSubmitting, setIsSubmitting] = React.useState(false);

const onSubmit = async (data) => {
  setIsSubmitting(true);
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form Data:', data);
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  } catch (error) {
    alert('There was an error submitting your message. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};

// Update the button
<button type="submit" className="submit-btn" disabled={isSubmitting}>
  {isSubmitting ? 'Sending...' : 'Send Message'}
</button>

  return (
    <div className="site-container">
      {/* Header */}
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
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Contact Us Section */}
      <section className="contact-us-layer">
        <div className="contact-us-content">
          <h2 className="contact-us-title">Contact Us</h2>
          <p className="contact-us-intro">
            We’d love to hear from you! Whether you have a question, feedback,
            or a story tip, feel free to reach out using the form below or
            contact us directly.
          </p>

          <div className="contact-us-container">
            {/* Contact Form */}
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className="error">{errors.name.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="error">{errors.email.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <span className="error">{errors.subject.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                  />
                  {errors.message && (
                    <span className="error">{errors.message.message}</span>
                  )}
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:contact@trendynews.com">
                  contact@trendynews.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Address:</strong> 123 News Street, Media City, NY 10001,
                USA
              </p>
              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook">
                    Facebook
                  </a>{" "}
                  |{" "}
                  <a href="#" aria-label="Twitter">
                    Twitter
                  </a>{" "}
                  |{" "}
                  <a href="#" aria-label="Instagram">
                    Instagram
                  </a>
                </div>
                <div className="contact-map">
                  <h4>Our Location</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509376!2d144.9537353153168!3d-37.81627977975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e5a7b5d4f0!2s123%20News%20Street%2C%20Media%20City%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-layer">
        <div className="footer-content">
          <p>© 2025 Trendy News. All rights reserved.</p>
          <div className="footer-links">
            <a href="/about-us">About Us</a> |{" "}
            <a href="/contact-us">Contact Us</a> |{" "}
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              Facebook
            </a>{" "}
            |{" "}
            <a href="#" aria-label="Twitter">
              Twitter
            </a>{" "}
            |{" "}
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
