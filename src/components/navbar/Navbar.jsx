import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/coffice_logo.svg";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ onBookNow }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navInner}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Links */}
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/amenities" className={styles.navLink}>Amenities</Link>
          <Link to="/benefits" className={styles.navLink}>Benefits</Link>
          <Link to="/pricing" className={styles.navLink}>Pricing</Link>
          <a href="/#contact" className={styles.navLink}>Contact</a>
        </div>

        {/* Desktop Book Now */}
        <button
          className={styles.bookNowBtn}
          onClick={onBookNow}
        >
          Book Now
        </button>

        {/* Mobile Menu Icon */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/amenities" onClick={() => setMenuOpen(false)}>Amenities</Link>
          <Link to="/benefits" onClick={() => setMenuOpen(false)}>Benefits</Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          {/* Mobile Book Now */}
          <button
            className={styles.mobileBookBtn}
            onClick={() => {
              onBookNow();
              setMenuOpen(false);
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
