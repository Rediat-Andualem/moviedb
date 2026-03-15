import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Social Icons */}
        <div className={styles.social}>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>

        {/* Links Section */}
        <div className={styles.linksGrid}>

          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>

          <ul>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>

          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>

          <ul>
            <li>Media Centre</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>

        </div>

        {/* Copyright */}
        <p className={styles.copyright}>
          © 1997-2026 Netflix, Inc.
        </p>

      </div>
    </footer>
  );
};

export default Footer;