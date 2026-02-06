import React, { useState } from 'react';
import styles from './Hero.module.css';
import heroimage from '../../assets/images/hero_img.png';
import contacticon from '../../assets/images/phone-animation.gif';
import ContactPopup from '../../pages/ContactPopup';

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openEnquiryForm = () => setShowPopup(true);

  return (
    <div className={styles.heroContainer}>

      {/* 🔥 Animated Title */}
      <h1 className={`${styles.title} ${styles.shineText}`}>
        Experience The Fun Of Co-Working Only At 
        <span className={styles.price}> 99/-</span>
      </h1>

      {/* 🎉 Subtitle */}
      <p className={`${styles.subtitle} ${styles.fadeUp}`}>Join a Thriving Community</p>

      {/* CTA Buttons */}
      <div className={styles.cta}>
        {/* Book Now triggers popup */}
        <button 
          className={`${styles.bookButton} ${styles.popIn}`}
          onClick={openEnquiryForm}
        >
          Book Now
        </button>

        <span className={styles.orText}>OR</span>

        <a href="tel:+919179748353" className={styles.callLink}>
          Call +91 9529730330
        </a>
      </div>

      {/* Hero Image */}
      <div className={styles.container}>
        <img src={heroimage} alt="Co-working space" className={`${styles.image} ${styles.zoomIn}`} />
      </div>

      {/* Contact Icon */}
      <div className={styles.contactIcon} onClick={openEnquiryForm}>
        <img src={contacticon} alt="Contact Icon" />
      </div>

      {/* Enquiry Form Popup */}
      {showPopup && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <ContactPopup setShowPopup={setShowPopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
