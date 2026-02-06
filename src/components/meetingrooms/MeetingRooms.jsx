import React from 'react';
import styles from './meetingrooms.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

// HD Online Images for Swiper
const images = [
  "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxzZWFyY2h8MXx8bWVldGluZyUyMHJvb218ZW58MHx8MHx8&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZyUyMHJvb218ZW58MHx8MHx8&ixlib=rb-4.0.3&q=80&w=1080",

];

// HD Online Icons for Benefits
const benefitsData = [
  {
    icons: "https://cdn-icons-png.flaticon.com/512/565/565547.png", 
    label: '300 MBPS Internet'
  },
  {
    icons: "https://cdn-icons-png.flaticon.com/512/2910/2910763.png", 
    label: 'Air Conditioned'
  },
  {
    icons: "https://cdn-icons-png.flaticon.com/512/149/149595.png", 
    label: 'Ambient Parking'
  },
  {
    icons: "https://cdn-icons-png.flaticon.com/512/992/992700.png", 
    label: '6-8 Seats'
  },
  {
    icons: "https://cdn-icons-png.flaticon.com/512/893/893257.png", 
    label: 'Smart TV with HDMI'
  },
  {
    icons: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", 
    label: 'Perfect for Team Meet'
  },
];

const MeetingRoomsItem = ({ icons, label }) => (
  <div className={styles.benefitItem}>
    <img className={styles.benefitIcon} src={icons} alt={label} />
    <span className={styles.benefitLabel}>{label}</span>
  </div>
);

const MeetingRooms = () => {
  return (
    <div className={styles.benefitsSection}>
      <div className={styles.benefitsContent}>
        <h1 className={styles.title}>Meeting Room</h1>
        <hr />
        <div className={styles.benefitsGrid}>
          {benefitsData.map((benefit) => (
            <MeetingRoomsItem key={benefit.label} {...benefit} />
          ))}
        </div>
      </div>

      <div className={styles.imageSection}>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          disableOnInteraction={true}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Meeting Room ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MeetingRooms;
