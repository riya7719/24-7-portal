import React from 'react'
import Hero from '../components/hero/Hero'
import WorkspaceListings from '../components/card/WorkspaceListings'
import CustomerReview from '../components/customerReview/CustomerReview'
import Benefits from '../components/benefits/Benefits'
import PricingPlan from '../components/pricingplan/PricingPlan'
import MeetingRooms from '../components/meetingrooms/MeetingRooms'
import Ameneties from '../components/ameneties/Ameneties'
import WorkDesked from '../components/workdesk/WorkDesk'
import Contactus from '../components/contactus/Contactus'
import PrimeLocation from '../components/primelocation/PrimeLocation'

function Home() {
  return (
    <div>
      <Hero />

      <WorkspaceListings/>
      <Benefits/>
      <CustomerReview/>
      <PricingPlan/>
      <MeetingRooms/>
      <Ameneties/>
      <WorkDesked/>
      <Contactus/>
      <PrimeLocation/>
      
    </div>
  )
}

export default Home