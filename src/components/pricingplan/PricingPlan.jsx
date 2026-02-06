import React, { useState } from "react";
import styles from "./pricingplan.module.css";
import headingmargin from "../../assets/images/heading-margin.png";
import paymentQR from "../../assets/images/QR1.jpeg";


const PricingPlan = () => {
  const [showQR, setShowQR] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Admin WhatsApp (country code, no +)
  const ADMIN_PHONE = "919529730330";

  const openQR = (plan) => {
    setSelectedPlan(plan);
    setShowQR(true);
  };

  const closeQR = () => {
    setShowQR(false);
    setSelectedPlan(null);
  };

  // QR Code URL


  // WhatsApp confirmation
  const confirmPayment = () => {
    if (!selectedPlan) return;

    const message = `Hello Admin 👋

I have completed the payment successfully.

📌 Plan: ${selectedPlan.name}
💰 Amount: ₹${selectedPlan.price}

📸 I will send the payment screenshot in the next message.

Payment done via PhonePe / Google Pay.
Please verify and confirm my booking.`;

    const whatsappURL = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>
        <img src={headingmargin} alt="headingmargin" />
        PRICING PLANS
      </h1>

      <div className={styles.pricingCards}>
        {/* Daily Plan */}
        <div className={styles.pricingCard}>
          <h2>Daily Plan</h2>
          <p className={styles.amount}>₹1 / day</p>
          <button
            className={styles.getStarted}
            onClick={() => openQR({ name: "Daily Plan", price: 1 })}
          >
            GET STARTED
          </button>
        </div>

        {/* Monthly Plan */}
        <div className={`${styles.pricingCard} ${styles.featured}`}>
          <h2>Monthly Plan</h2>
          <p className={styles.amount}>₹4999 / seat</p>
          <button
            className={styles.getStarted}
            onClick={() => openQR({ name: "Monthly Plan", price: 4999 })}
          >
            GET STARTED
          </button>
        </div>

        {/* Private Pod */}
        <div className={styles.pricingCard}>
          <h2>Private Pod</h2>
          <p className={styles.amount}>₹6999 / seat</p>
          <button
            className={styles.getStarted}
            onClick={() => openQR({ name: "Private Pod", price: 6999 })}
          >
            GET STARTED
          </button>
        </div>
      </div>

      {/* QR MODAL */}
      {showQR && selectedPlan && (
        <div className={styles.qrOverlay}>
          <div className={styles.qrPopup}>
            <button className={styles.closeBtn} onClick={closeQR}>
              ×
            </button>

            <h2>{selectedPlan.name}</h2>
            <p>
              <strong>Amount:</strong> ₹{selectedPlan.price}
            </p>

            <img src={paymentQR} alt="Payment QR" className={styles.qrImg} />


            <p className={styles.payText}>
              Scan & pay using <strong>PhonePe or Google Pay</strong>
            </p>

            <div className={styles.termsBox}>
              <h4>Terms & Conditions</h4>
              <ul>
                <li>Only real-time payment screenshots are accepted.</li>
                <li>Payment must be done via PhonePe or Google Pay.</li>
                <li>Edited or fake screenshots will be rejected.</li>
                <li>Admin verification is mandatory.</li>
              </ul>
            </div>

            <button className={styles.getStarted} onClick={confirmPayment}>
              I HAVE PAID ✔
            </button>

            <p className={styles.note}>
              WhatsApp will open. Please send the payment screenshot in the next
              message.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPlan;
