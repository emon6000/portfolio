import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaRedditAlien,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="global-footer">
      <div className="footer-content">
        <div className="footer-header">
          {/* Changed from 04 to 05 */}
          <h2 className="footer-title">/ INITIATE CONNECTION</h2>
          <p className="footer-subtitle">Find me ....</p>
        </div>

        <div className="social-links-grid">
          <a
            href="https://github.com/emon6000"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaGithub className="social-icon" /> GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/abdem0n/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaLinkedin className="social-icon" /> LINKEDIN
          </a>
          <a
            href="https://x.com/ABDEM0N"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaXTwitter className="social-icon" /> X (TWITTER)
          </a>
          <a
            href="https://www.reddit.com/user/ABDEM0N"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaRedditAlien className="social-icon" /> REDDIT
          </a>
          <a
            href="https://www.instagram.com/emonthenoob/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaInstagram className="social-icon" /> INSTAGRAM
          </a>
          <a
            href="https://www.facebook.com/BEASTINTHEBANK01"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaFacebookF className="social-icon" /> FACEBOOK
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} ABDULLAH AL MAHMUD EMON. All rights reserved.
          </p>
          <p className="built-with">Email: abdullahemon6377@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
