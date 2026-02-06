import React from 'react';
import styles from './benefits.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

// Image slider URLs
const images = [
  "https://i.pinimg.com/736x/3d/9b/f8/3d9bf88dc27dc78d64670ea34a94147a.jpg",
  "https://i.pinimg.com/1200x/ca/6f/aa/ca6faa214e956ccfc03797cb890045f8.jpg",
  "https://i.pinimg.com/736x/0b/bb/75/0bbb75c4dd9f78944cbbe76e3bd10bf6.jpg"
];

// Benefits section icon URLs
const benefitsData = [
  {
    icons: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    label: "Private Cabin"
  },
  {
    icons: "https://cdn-icons-png.flaticon.com/512/2942/2942075.png",
    label: "Meeting Room"
  },
  {
    icons: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
    label: "Office Cabin"
  },
  {
    icons: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    label: "Custom Cabin"
  }
];

const BenefitItem = ({ icons, label }) => {
  return (
    <div className={styles.benefitItem}>
      <div className={styles.iconWrapper}>
        <img className={styles.benefitIcon} src={icons} alt={label} />
      </div>
      <span className={styles.benefitLabel}>{label}</span>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className={styles.benefitsSection}>
      <div className={styles.benefitsContent}>
        <div className={styles.label}>BENEFITS</div>

        <h1 className={styles.title}>We provide more than just a space</h1>

        <p className={styles.subtitle}>
          Private cabins with WiFi and whiteboards for focused work and meetings.
        </p>

        <div className={styles.benefitsGrid}>
          {benefitsData.map((benefit) => (
            <BenefitItem key={benefit.label} {...benefit} />
          ))}
        </div>
      </div>

      <div className={styles.imageSection}>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Benefit Image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Benefits;
