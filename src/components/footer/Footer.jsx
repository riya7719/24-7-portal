import React from 'react';
import styles from './Footer.module.css'; // Import CSS Module
import logo from '../../assets/images/footer-logo.svg'
import contact from '../../assets/images/phone-icon.png'
import mail from '../../assets/images/mail-icon.png'
import web from '../../assets/images/web-icon.png'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <img src={logo} alt="COFFICE24x7" />
        <p className={styles.tagline}>We look forward to connecting with you!</p>
       
      </div>

      <div className={styles.footerColumn}>
        <h2>Services</h2>
        <ul className={styles.footerLinks}>
          <li><a href="#">Amenities</a></li>
          <li><a href="#">Benefits</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>

      <div className={styles.footerColumn}>
        <h2>Collaboration</h2>
        <ul className={styles.contactInfo}>
         <li>
  <img src={contact} alt="Phone" />
  <a href="tel:+919529730330">+91 9529730330</a>
</li>

<li>
  <img src={mail} alt="Email" />
  <a href="mailto:patiltejashri064@gmail.com">
  patiltejashri064@gmail.com
</a>
</li>

          <li>
            <img src={web} alt="Website" /> coffice24x7.in
          </li>
        </ul>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialIcon}>
          <FaFacebook size={30} color="white" />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaInstagram size={30} color="white"/>
          </a>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;