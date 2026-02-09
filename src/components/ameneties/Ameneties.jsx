import React, { useState } from 'react';
import styles from './ameneties.module.css';
import headingmargin from '../../assets/images/heading-margin.png';
import ContactPopup from '../../pages/ContactPopup';

// 🎯 Images
const privateCabinImg = "https://cdn.app.gofloaters.com/images%2F5%20Seater%20Private%20Cabin%20%7C%20Indiranagar_1611857234581?alt=media&token=86c3cc21-40e9-4262-84bb-a5d26ad0ac1c";
const teamCabinImg = "https://media.istockphoto.com/id/1408945927/photo/successful-team.jpg?s=612x612&w=0&k=20&c=6fqkRBngEfC0jrHxe0DotD4meQ2bnmSuvsHvhPkt18A=";
const meetingRoomImg = "https://media.istockphoto.com/id/1363104923/photo/diverse-modern-office-businessman-leads-business-meeting-with-managers-talks-uses.jpg?s=612x612&w=0&k=20&c=R6-SufHacJ6bCnviq37kik2Jl6RMdECybcUpEoRuMLs=";
const privatePodImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4dYp0XGKF7NTkaiErYiLcyq1vVAyax7qCg&s";

const Ameneties = () => {
  const [activeTab, setActiveTab] = useState('Private Cabin');
  const [showPopup, setShowPopup] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'Private Cabin':
        return <PrivateCabins setShowPopup={setShowPopup} />;
      case 'Team Cabin':
        return <TeamCabins setShowPopup={setShowPopup} />;
      case 'Meeting Room':
        return <MeetingroomCabins setShowPopup={setShowPopup} />;
      case 'Private Pod':
        return <PrivatePod setShowPopup={setShowPopup} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.amenitiesHeader}>
        <h1>
          <img src={headingmargin} alt="headingmargin" /> AMENITIES
        </h1>
      </header>

      <div className={styles.tabs}>
        {['Private Cabin', 'Team Cabin', 'Meeting Room', 'Private Pod'].map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.contentWrapper}>{renderContent()}</div>

      {/* ✅ POPUP RENDERED HERE (ONLY ONCE) */}
      {showPopup && <ContactPopup setShowPopup={setShowPopup} />}
    </div>
  );
};

/* ================= CHILD COMPONENTS ================= */

const PrivateCabins = ({ setShowPopup }) => {
  return (
    <div className={styles.contentGrid}>
      <div className={styles.imageContainer}>
        <img src={privateCabinImg} alt="Private Cabin" />
      </div>

      <div className={styles.amentiesfeatures}>
        <div className={styles.amentiesfeature}>
          <h2>Versatile Accommodations:</h2>
          <p>Suitable for any group size, from small teams to large conferences.</p>
        </div>

        <div className={styles.amentiesfeature}>
          <h2>Seamless Booking:</h2>
          <p>Book hassle-free with real-time availability on our website.</p>
        </div>

        <div className={styles.amentiesfeature}>
          <h2>Professional Environment:</h2>
          <p>Tailored to meet all your business needs for maximum productivity.</p>
        </div>

        <button className={styles.bookButton} onClick={() => setShowPopup(true)}>
          Book Now
        </button>
      </div>
    </div>
  );
};

const TeamCabins = ({ setShowPopup }) => {
  return (
    <div className={styles.contentGrid}>
      <div className={styles.imageContainer}>
        <img src={teamCabinImg} alt="Team Cabin" />
      </div>

      <div className={styles.amentiesfeatures}>
        <div className={styles.amentiesfeature}>
          <h2>Dedicated Private Spaces:</h2>
          <p>Ergonomic furniture, natural lighting, and advanced tech for efficient teamwork.</p>
        </div>

        <div className={styles.amentiesfeature}>
          <h2>Comprehensive Amenities:</h2>
          <p>Internet, outlets, and whiteboards cater to your team's work and brainstorming needs.</p>
        </div>

        <div className={styles.amentiesfeature}>
          <h2>Confidential and Productive:</h2>
          <p>Soundproof walls ensure privacy, fostering a focused environment.</p>
        </div>

        <button className={styles.bookButton} onClick={() => setShowPopup(true)}>
          Book Now
        </button>
      </div>
    </div>
  );
};

const MeetingroomCabins = ({ setShowPopup }) => {
  return (
    <div className={styles.contentGrid}>
      <div className={styles.imageContainer}>
        <img src={meetingRoomImg} alt="Meeting Room" />
      </div>

      <div className={styles.amentiesfeatures}>
        <div className={styles.amentiesfeature}>
          <h2>Fully Equipped with the Latest Technology:</h2>
          <p>HD projectors, video conferencing, and sound systems ensure smooth meetings.</p>
        </div>

        <div className={styles.amentiesfeature}>
          <h2>Comfortable and Professional Environment:</h2>
          <p>Professional decor and ergonomic furniture provide a pleasant atmosphere.</p>
        </div>

        <div className={styles.amentiesfeature}>
          <h2>Interactive Brainstorming Tools:</h2>
          <p>Whiteboards and flip charts for interactive brainstorming sessions.</p>
        </div>

        <button className={styles.bookButton} onClick={() => setShowPopup(true)}>
          Book Now
        </button>
      </div>
    </div>
  );
};

const PrivatePod = ({ setShowPopup }) => {
  return (
    <div className={styles.contentGrid}>
      <div className={styles.imageContainer}>
        <img src={privatePodImg} alt="Private Pod" />
      </div>

      <div className={styles.amentiesfeatures}>
        <div className={styles.amentiesfeature}>
          <h2>Quiet and Focused Workspace:</h2>
          <p>Soundproofing provides privacy and focus.</p>
        </div>

        <div className={styles.amentiesfeature}>
          <h2>Ergonomic Comfort:</h2>
          <p>Includes seating, adjustable desks, and climate control.</p>
        </div>

        <button className={styles.bookButton} onClick={() => setShowPopup(true)}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Ameneties;
