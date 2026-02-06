import React, { useState } from 'react';
import styles from './Card.module.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from 'react-router-dom';
import workspaceListings from '../../assets/data/workspacelisting';
import ContactPopup from '../../pages/ContactPopup';



const Card = ({ id, images, alt, badge, title, location, price, rating }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className={`${styles.card} workcard`}>
        <Link to={`/workspace/${id}`} className={styles["image-container"]}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {images?.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={alt || title} />
              </SwiperSlide>
            ))}
          </Swiper>
          <span className={styles.badge}>{badge}</span>
        </Link>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.location}>{location}</p>
          <p className={styles.price}>{price}</p>
          <div className={styles.footer}>
            <span className={styles.rating}>{rating}</span>
            <button className={styles.button} onClick={togglePopup}>
              Book Now
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <ContactPopup setShowPopup={setShowPopup} />
          </div>
        </div>
      )}
    </>
  );
};



const WorkspaceListings = () => {

 
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {workspaceListings.map((listing) => (
          <Card
            key={listing.id}
            id={listing.id}
            images={listing.images}
            badge={listing.badge}
            title={listing.title}
            location={listing.location}
            price={listing.price}
            rating={listing.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkspaceListings;