import React, { useState } from "react";
import "./popup.css";

export default function OfferPopup() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="offer-popup">
      <button className="close-btn" onClick={() => setShow(false)}>×</button>

      <div className="popup-content">
        <h4>🎉 Special Offer</h4>
        <h3>First DayPass for Co-working</h3>
        <h2>Just 99/-</h2>
        <span>📞 Call Now: 91797-48353</span>
      </div>
    </div>
  );
}
