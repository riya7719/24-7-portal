// ContactSection.jsx
import React from 'react';
import styles from './contactus.module.css';
import contactico from '../../assets/images/contact_img.png'
import headingmargin from '../../assets/images/heading-margin.png'

const Contactus = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.header}>
                <div className={styles.greenSlashes}><img src={headingmargin} alt="headingmargin" />CONTACT US</div>
                <h1>
                    Let's work <span>Together</span>
                </h1>
                <p>Any question or remark? just write us a message</p>
            </div>

            <div className={styles.contactContainer}>
                <div className={styles.chatCard}>
                    <h2 className={styles.chatTitle}>Let's contact with us</h2>
                    <p className={styles.chatDescription}>
                        Interested in membership or have questions?<br />
                        Our friendly team is here to assist you!
                    </p>

                    <img src={contactico} alt="contact" />

                    <p className={styles.privacyNotice}>
                        Your privacy is important to us. We will never share your information with third parties without your consent.
                    </p>
                </div>

                <div className={styles.contactForm}>
                    <h3 className={styles.formTitle}>Contact us</h3>
                    <form className={styles.formGrid}>
                        <div className={styles.inputcontact}>
                        <input type="text" placeholder="Full name" className={styles.formControl} />
                        <input type="email" placeholder="Email address" className={styles.formControl} />
                        <input type="tel" placeholder="Phone number" className={styles.formControl} />
                        </div>
                        
                        <textarea placeholder="Message" className={styles.formControl}></textarea>
                        <button type="submit" className={styles.submitButton}>Send Enquiry</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contactus;
