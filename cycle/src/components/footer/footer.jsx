import React, { useEffect } from "react";
import "./footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="footer-container">
      <div className="newsletter-container">
        <h1 className="newsletter-header" data-aos="fade-up">
          SUBSCRIBE TO OUR EMAIL
        </h1>
        <p className="newsletter-description" data-aos="fade-up">
          BE THE FIRST TO KNOW ABOUT NEW COLLECTIONS AND EXCLUSIVE OFFERS
        </p>
        <div className="newsletter-email-input-container" data-aos="fade-up">
          <input
            type="text"
            placeholder="youremail@example.com"
            className="newsletter-email-input"
          />
          <button className="newsletter-email-input-subscribe-button">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="footer-content-container" data-aos="fade-up">
        <div className="footer-content-header">RideAxis</div>
        <div className="footer-content-content">
          <h2>Content</h2>
          <p>Highlights</p>
          <p>Video Channel</p>
          <p>Current Issue</p>
          <p>Watch Gallery</p>
          <p>Portfolios</p>
        </div>
        <div className="footer-content-company">
          <h2>Company</h2>
          <p>About us</p>
          <p>Contact us</p>
          <p>Partnership</p>
        </div>
        <div className="footer-content-more">
          <h2>More</h2>
          <p>Club</p>
          <p>Opinions</p>
          <p>Brand index</p>
          <p>Magazines</p>
        </div>
        <div className="footer-content-findus">
          <h2>Find us on</h2>
          <div className="footer-content-icons-container">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <footer>
        &copy; {new Date().getFullYear()} RideAxis. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
