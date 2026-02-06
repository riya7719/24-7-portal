import React, { useEffect } from "react";
import "./splash.css";

export default function SplashScreen({ onFinish }) {
  // Updated reliable logo URL
  const logo =
    "https://cdn-icons-png.flaticon.com/512/924/924514.png"; // Coffee cup icon from Flaticon

  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 10000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <img src={logo} alt="COFFICE24x7 Logo" className="splash-logo" />
      <h1 className="splash-title">COFFICE24x7</h1>
    </div>
  );
}
