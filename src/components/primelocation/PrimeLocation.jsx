import React from "react";
import styles from "./primelocation.module.css";
import chai from '../../assets/images/chai-img.png'
import recreation from '../../assets/images/recreation-zone-img.png'
import library from '../../assets/images/library-img.png'
import cafie from '../../assets/images/cafe-img.png'
import hadapsar from '../../assets/images/adress-img1.png'
import saudagar from '../../assets/images/address-img2.png'

const PrimeLocation = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>@ Two Prime Locations</h1>

      {/* Amenities Section */}
      <div className={styles.primeloccontent}>
        <div className={styles.amenitiesGrid}>
          <div className={styles.amenityCard}>
            <img src={chai} alt="Chai Coffee Area" className={styles.amenityImage} />
            <div className={styles.amenityTitle}>Chai, Coffee, Mocha</div>
          </div>

          <div className={styles.amenityCard}>
            <img src={recreation} alt="Recreation Zone" className={styles.amenityImage} />
            <div className={styles.amenityTitle}>Recreation Zone</div>
          </div>

          <div className={styles.amenityCard}>
            <img src={library} alt="Library" className={styles.amenityImage} />
            <div className={styles.amenityTitle}>Complementary Library</div>
          </div>

          <div className={styles.amenityCard}>
            <img src={cafie} alt="Cafeteria" className={styles.amenityImage} />
            <div className={styles.amenityTitle}>Cafeteria</div>
          </div>
        </div>

        {/* Locations Section */}
        <div className={styles.locationsGrid}>

          {/* Hadapsar Location */}
          <div className={styles.locationCard}>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Office+No.+102-B,+First+Floor,+Ganesham+Commercial-A,+Survey+No.+21/18-21/24,+BRTS+Road,+Pimple+Saudagar,+Pune+411027"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={hadapsar}
                alt="Hadapsar Location"
                className={styles.locationImage}
              />
            </a>
          </div>

          {/* Pimple Saudagar Location */}
          <div className={styles.locationCard}>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Office+No.+102-B,+First+Floor,+Ganesham+Commercial-A,+Survey+No.+21/18-21/24,+BRTS+Road,+Pimple+Saudagar,+Pune+411027"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={saudagar}
                alt="Pimple Saudagar Location"
                className={styles.locationImage}
              />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrimeLocation;