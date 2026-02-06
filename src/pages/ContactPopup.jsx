// import React from "react";
// import styles from "./contactpopup.module.css";
// import { BsCheckCircleFill } from "react-icons/bs";
// import connectcontact from "../assets/images/connectcontact.png"; // keep this (only internal image)

// const brandLogos = [
//   "https://upload.wikimedia.org/wikipedia/en/6/6d/Inox_Movies_Logo.png",
//   "https://1000logos.net/wp-content/uploads/2021/05/Kotak-Mahindra-Bank-logo.png",
//   "https://cdn.razorpay.com/logo.png",
//   "https://seeklogo.com/images/D/doubtnut-logo-287C7E4F76-seeklogo.com.png",
//   "https://cdn.worldvectorlogo.com/logos/creatable.svg",
//   "https://assets-global.website-files.com/5e9c0f540b0183e23861a4ba/62eda7c2fab74a0e112a88bf_OG%20Image.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/4/40/Purple_Logo.png",
//   "https://classplusapp.com/wp-content/uploads/2023/01/Classplus-logo.png",
//   "https://hb.bizmudra.com/assets/images/logo.png",
//   "https://download.logo.wine/logo/Google/Google-Logo.wine.png",
//   "https://1000logos.net/wp-content/uploads/2021/04/Amazon-logo.png",
//   "https://upload.wikimedia.org/wikipedia/commons/5/51/Meta_Platforms_Inc._logo.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
//   "https://upload.wikimedia.org/wikipedia/commons/0/08/Spotify_logo_vertical_black.jpg",
// ];

// const ContactPopup = ({ setShowPopup }) => {
//   return (
//     <div className={styles.overlay}>
//       <div className={styles.container}>
//         {/* LEFT SIDE */}
//         <div className={styles.leftSection}>
//           <h1 className={styles.mainHeading}>Find Your Perfect Workspace!</h1>
//           <p className={styles.subText}>
//             Get custom quotes, best deals, and expert-guided tours for your
//             workspace needs.
//           </p>

//           <div className={styles.features}>
//             {[
//               "Customized Spaces",
//               "Prime Locations",
//               "Expert Guided Tours",
//               "Flexible Terms",
//               "Dedicated Support",
//               "Fast Onboarding",
//             ].map((item, i) => (
//               <div className={styles.featureItem} key={i}>
//                 <i>
//                   <BsCheckCircleFill />
//                 </i>
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>

//           <div className={styles.companies}>
//             <h3>Trusted by Leading Brands</h3>
//             <div className={styles.companyGrid}>
//               {brandLogos.map((logo, index) => (
//                 <img
//                   key={index}
//                   src={logo}
//                   alt="company"
//                   className={styles.companyLogo}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE FORM */}
//         <div className={`${styles.rightSection} ${styles.scrollArea}`}>
//           <button
//             className={styles.closeButton}
//             onClick={() => setShowPopup(false)}
//           >
//             &times;
//           </button>

//           <h2 className={styles.formHeading}>Yes, I Am Interested!</h2>
//           <p className={styles.formSubText}>
//             Fill your details and our expert will reach out shortly.
//           </p>

//           <form className={styles.form}>
//             <div className={styles.formGroup}>
//               <input type="text" required />
//               <label>Name*</label>
//             </div>

//             <div className={styles.formGroup}>
//               <input type="email" required />
//               <label>Email*</label>
//             </div>

//             <div className={`${styles.formGroup} ${styles.phoneInput}`}>
//               <select>
//                 <option>+91</option>
//               </select>
//               <input type="tel" required />
//               <label>Phone*</label>
//             </div>

//             <div className={styles.formGroup}>
//               <select required>
//                 <option>Type of Space*</option>
//                 <option>Co-working Space</option>
//                 <option>Private Office</option>
//                 <option>Meeting Room</option>
//                 <option>Dedicated Desk</option>
//                 <option>Event Space</option>
//               </select>
//             </div>

//             <div className={styles.formGroup}>
//               <select required>
//                 <option>Select City*</option>
//                 <option>Mumbai</option>
//                 <option>Pune</option>
//                 <option>Bangalore</option>
//                 <option>Hyderabad</option>
//                 <option>Delhi</option>
//               </select>
//             </div>

//             <div className={styles.formGroup}>
//               <input type="text" required />
//               <label>Budget Range (₹)*</label>
//             </div>

//             <div className={styles.formGroup}>
//               <input type="date" required />
//               <label>Move-In Date*</label>
//             </div>

//             <div className={styles.formGroup}>
//               <input type="number" required />
//               <label>Team Size*</label>
//             </div>

//             <div className={styles.formGroup}>
//               <textarea rows="3" required></textarea>
//               <label>Your Requirements*</label>
//             </div>

//             <button className={styles.submitcontactbutton} type="submit">
//               Submit Request
//             </button>
//           </form>

//           <div className={styles.expertContact}>
//             <img src={connectcontact} alt="Expert" />
//             <div className={styles.expertInfo}>
//               <p>Contact our workspace expert</p>
//               <p>📞 9529730330</p>
//               <p>📧 hello@cofynd.com</p>
//             </div>
//           </div>

//           <button
//             className={styles.bottomCancel}
//             onClick={() => setShowPopup(false)}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPopup;



import React, { useState } from "react";
import styles from "./contactpopup.module.css";
import { BsCheckCircleFill } from "react-icons/bs";
import connectcontact from "../assets/images/connectcontact.png";
import emailjs from "@emailjs/browser";

const brandLogos = [
  "https://upload.wikimedia.org/wikipedia/en/6/6d/Inox_Movies_Logo.png",
  "https://1000logos.net/wp-content/uploads/2021/05/Kotak-Mahindra-Bank-logo.png",
  "https://cdn.razorpay.com/logo.png",
  "https://seeklogo.com/images/D/doubtnut-logo-287C7E4F76-seeklogo.com.png",
  "https://cdn.worldvectorlogo.com/logos/creatable.svg",
  "https://assets-global.website-files.com/5e9c0f540b0183e23861a4ba/62eda7c2fab74a0e112a88bf_OG%20Image.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/40/Purple_Logo.png",
  "https://classplusapp.com/wp-content/uploads/2023/01/Classplus-logo.png",
  "https://hb.bizmudra.com/assets/images/logo.png",
  "https://download.logo.wine/logo/Google/Google-Logo.wine.png",
  "https://1000logos.net/wp-content/uploads/2021/04/Amazon-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Meta_Platforms_Inc._logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Spotify_logo_vertical_black.jpg",
];

const ContactPopup = ({ setShowPopup }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    spaceType: "",
    city: "",
    budget: "",
    moveInDate: "",
    teamSize: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_e2jroob",
        "template_he2jcjm",
        formData,
        "BrQ5-jaAzRl0OrP-B"
      )
      .then(() => {
        alert("Request submitted successfully ✅");
        setLoading(false);
        setShowPopup(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to submit request ❌");
        setLoading(false);
      });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.leftSection}>
          <h1 className={styles.mainHeading}>Find Your Perfect Workspace!</h1>
          <p className={styles.subText}>
            Get custom quotes, best deals, and expert-guided tours for your
            workspace needs.
          </p>

          <div className={styles.features}>
            {[
              "Customized Spaces",
              "Prime Locations",
              "Expert Guided Tours",
              "Flexible Terms",
              "Dedicated Support",
              "Fast Onboarding",
            ].map((item, i) => (
              <div className={styles.featureItem} key={i}>
                <i>
                  <BsCheckCircleFill />
                </i>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.companies}>
            <h3>Trusted by Leading Brands</h3>
            <div className={styles.companyGrid}>
              {brandLogos.map((logo, index) => (
                <img key={index} src={logo} alt="company" />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className={`${styles.rightSection} ${styles.scrollArea}`}>
          <button
            className={styles.closeButton}
            onClick={() => setShowPopup(false)}
          >
            &times;
          </button>

          <h2 className={styles.formHeading}>Yes, I Am Interested!</h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input name="name" onChange={handleChange} required />
              <label>Name*</label>
            </div>

            <div className={styles.formGroup}>
              <input name="email" type="email" onChange={handleChange} required />
              <label>Email*</label>
            </div>

            <div className={`${styles.formGroup} ${styles.phoneInput}`}>
              <select>
                <option>+91</option>
              </select>
              <input
                name="phone"
                type="tel"
                onChange={handleChange}
                required
              />
              <label>Phone*</label>
            </div>

            <div className={styles.formGroup}>
              <select name="spaceType" onChange={handleChange} required>
                <option value="">Type of Space*</option>
                <option>Co-working Space</option>
                <option>Private Office</option>
                <option>Meeting Room</option>
                <option>Dedicated Desk</option>
                <option>Event Space</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <select name="city" onChange={handleChange} required>
                <option value="">Select Area*</option>
                <option>Hadapsar</option>
                <option>Pimple Saudagar</option>
               
              </select>
            </div>

            <div className={styles.formGroup}>
              <input name="budget" onChange={handleChange} required />
              <label>Budget Range (₹)*</label>
            </div>

            <div className={styles.formGroup}>
              <input
                name="moveInDate"
                type="date"
                onChange={handleChange}
                required
              />
              <label>Move-In Date*</label>
            </div>

            <div className={styles.formGroup}>
              <input
                name="teamSize"
                type="number"
                onChange={handleChange}
                required
              />
              <label>Team Size*</label>
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="requirements"
                rows="3"
                onChange={handleChange}
                required
              />
              <label>Your Requirements*</label>
            </div>

            <button className={styles.submitcontactbutton} type="submit">
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>

          <div className={styles.expertContact}>
            <img src={connectcontact} alt="Expert" />
            <div>
              <p>Contact our workspace expert</p>
              <p>📞 9529730330</p>
              <p>📧 patiltejashri064@gmail.com</p>
            </div>
          </div>

          <button
            className={styles.bottomCancel}
            onClick={() => setShowPopup(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
