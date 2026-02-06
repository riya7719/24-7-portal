import React from "react";
import { useParams } from "react-router-dom";
import styles from "./SeatingPlansAndFeatures.module.css";

import workspaceListings from "../../src/assets/data/workspacelisting"

// icons & images
import pricetag from "../assets/images/pricetag.svg";
import avatar from "../assets/images/avatar.jpg";
import inox from "../assets/images/d4d6213847e3f0ce93f7ab1baa36d2ad3372c623.webp";
import kotak from "../assets/images/kotak.webp";
import razaropay from "../assets/images/razaropay.webp";
import doutnut from "../assets/images/doubtnut.webp";
import creadble from "../assets/images/creadable.webp";
import accio from "../assets/images/acciojob.webp";
import purple from "../assets/images/purple.webp";
import classplus from "../assets/images/classplus.webp";
import hb from "../assets/images/hb.webp";

// seating images (static)
const hotDeskImg =
  "https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg";
const dedicatedImg =
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg";
const cabinImg =
  "https://images.pexels.com/photos/3182770/pexels-photo-3182770.jpeg";

const SeatingPlansAndFeatures = () => {
  const { id } = useParams();

  const workspace = workspaceListings.find(
    (item) => item.id === Number(id)
  );

  if (!workspace) {
    return <h2 style={{ padding: 40 }}>Workspace not found</h2>;
  }

  const openWhatsApp = () => {
    const phone = "919529730330";
    const message = `Hello, I'm interested in ${workspace.title}. Please share more details.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className={styles.seatingfeaturecontainer}>
      {/* HEADER */}
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>{workspace.title}</h1>

          <div className={styles.ratingLocation}>
            <span className={styles.rating}>{workspace.rating}</span>
            <span className={styles.location}>{workspace.location}</span>
            <span className={styles.trust}>Trusted Workspace</span>
          </div>

          <div className={styles.price}>
            <span>Starting</span>
            <h2>{workspace.price}</h2>
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className={styles.imageGrid}>
          <div className={styles.mainImage}>
            <img
              src={workspace.images[0]}
              alt={workspace.title}
              className={styles.image}
            />
            <span className={styles.peopleChoice}>{workspace.badge}</span>
          </div>

          <div className={styles.gridImages}>
            {workspace.images.slice(1, 3).map((img, i) => (
              <img key={i} src={img} alt="workspace" />
            ))}
          </div>
        </div>
      </div>

      {/* SEATING PLANS */}
      <div className={styles.awifscontainer}>
        <h1 className={styles.heading}>Seating Plans</h1>

        {/* Hot Desk */}
        <div className={styles.seatingPlan}>
          <img src={hotDeskImg} alt="Hot Desk" />
          <div className={styles.planDetails}>
            <h2>Hot Desk</h2>
            <p>Floating desk in shared area</p>
            <div className={styles.priceSection}>
              ₹5,000/seat
              <button onClick={openWhatsApp}>Enquire Now</button>
            </div>
          </div>
        </div>

        {/* Dedicated Desk */}
        <div className={styles.seatingPlan}>
          <img src={dedicatedImg} alt="Dedicated Desk" />
          <div className={styles.planDetails}>
            <h2>Dedicated Desk</h2>
            <p>Fixed workspace</p>
            <div className={styles.priceSection}>
              ₹11,000/seat
              <button onClick={openWhatsApp}>Enquire Now</button>
            </div>
          </div>
        </div>

        {/* Private Cabin */}
        <div className={styles.privateCabin}>
          <img src={cabinImg} alt="Private Cabin" />
          <div>
            <h2>Private Cabin</h2>
            <p>Fully furnished private office</p>
            <div className={styles.price}>
              ₹13,000/seat
              <button onClick={openWhatsApp}>Enquire Now</button>
            </div>
          </div>
        </div>

        {/* WHY BOOK */}
        <div className={styles.whyBook}>
          <h2>Why book with us?</h2>
          <div className={styles.featuresGrid}>
            <div><img src={pricetag} /> Zero Booking Fee</div>
            <div><img src={pricetag} /> Guided Tours</div>
            <div><img src={pricetag} /> Verified Spaces</div>
            <div><img src={pricetag} /> Dedicated Manager</div>
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className={styles.sidebar}>
        <div className={styles.enquiryForm}>
          <h2>Interested in this Property?</h2>
          <button onClick={openWhatsApp}>Enquire on WhatsApp</button>

          <div className={styles.expertContact}>
            <img src={avatar} alt="expert" />
            <div>hello@cofynd.com</div>
          </div>

          <div className={styles.trustedCompanies}>
            <img src={inox} />
            <img src={kotak} />
            <img src={razaropay} />
            <img src={doutnut} />
            <img src={creadble} />
            <img src={accio} />
            <img src={purple} />
            <img src={classplus} />
            <img src={hb} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatingPlansAndFeatures;
