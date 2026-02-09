// ContactSection.jsx
import React, { useState } from 'react';
import styles from './contactus.module.css';
import contactico from '../../assets/images/contact_img.png'
import headingmargin from '../../assets/images/heading-margin.png'
import emailjs from '@emailjs/browser'; // ✅ added

const Contactus = () => {

    // ✅ added
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    // ✅ added
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ added
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_e2jroob',        // 🔴 replace if different
            'template_he2jcjm',       // 🔴 replace if different
            formData,
            'BrQ5-jaAzRl0OrP-B'       // 🔴 replace if different
        )
        .then(() => {
            alert('Enquiry sent successfully ✅');
            setFormData({ name:'', email:'', phone:'', message:'' });
        })
        .catch(() => {
            alert('Failed to send enquiry ❌');
        });
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.header}>
                <div className={styles.greenSlashes}>
                    <img src={headingmargin} alt="headingmargin" />CONTACT US
                </div>
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

                    {/* ✅ only added onSubmit */}
                    <form className={styles.formGrid} onSubmit={handleSubmit}>
                        <div className={styles.inputcontact}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full name"
                                className={styles.formControl}
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                className={styles.formControl}
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                                className={styles.formControl}
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <textarea
                            name="message"
                            placeholder="Message"
                            className={styles.formControl}
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>

                        <button type="submit" className={styles.submitButton}>
                            Send Enquiry
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contactus;
