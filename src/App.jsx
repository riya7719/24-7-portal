import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import SeatingPlansAndFeatures from "./pages/SeatingPlansAndFeatures";

import WorkspaceListings from "./components/card/WorkspaceListings";
import Ameneties from "./components/ameneties/Ameneties";
import Benefits from "./components/benefits/Benefits";
import PricingPlan from "./components/pricingplan/PricingPlan";
import Contactus from "./components/contactus/Contactus";

import OfferPopup from "./components/popup/OfferPopup";
import VoiceChatbot from "./components/chat/VoiceChatbot";
import SplashScreen from "./components/splash/SplashScreen";

import ContactPopup from "./pages/ContactPopup"; // make sure this import is correct

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showPopup, setShowPopup] = useState(false); // <-- add this

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          {/* Pass the handler to Navbar */}
          <Navbar onBookNow={() => setShowPopup(true)} />

          {/* Contact Enquiry Popup */}
          {showPopup && <ContactPopup setShowPopup={setShowPopup} />}

          {/* Floating Offer Popup */}
          <OfferPopup />

          {/* Chatbot */}
          <VoiceChatbot />

          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Static pages */}
            <Route path="/amenities" element={<Ameneties />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/pricing" element={<PricingPlan />} />
            <Route path="/contact" element={<Contactus />} />

            {/* Workspace pages */}
            <Route path="/workspace-listings" element={<WorkspaceListings />} />
            <Route path="/workspace/:id" element={<SeatingPlansAndFeatures />} />
          </Routes>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
