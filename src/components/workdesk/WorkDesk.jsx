import React from 'react';
import styles from './workdesk.module.css';
import workdesk from '../../assets/images/ss_img.png'

const WorkDesked = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Step Into Work Desk Near Home</h1>
                    <p className={styles.heroSubtitle}>
                      Take The Next Step Toward Success.<br />Join Us Today!
                    </p>

                    <div className={styles.ctaSection}>
                        <a href="tel:+919529730330" className={styles.contactButton}>
                          Contact Now
                        </a>

                        <span className={styles.orText}>OR</span>

                        <a href="tel:+919529730330" className={styles.phoneNumber}>
                          +91 9529730330
                        </a>
                    </div>
                </div>

                <div className={styles.previewSection}>
                    <img width={600} src={workdesk} alt="workdesk" />
                </div>
            </div>
        </div>
    );
}

export default WorkDesked;
