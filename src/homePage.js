import React from 'react';
import './home.css';
import ParticleBackground from './ParticleBackground';
import NavbarHome from './navbarHome';
import LandingHome from './landingHome';
import WhoAreWe from './whoAreWe';
import OurVision from './ourVision';
import OurCustomers from './ourCustomers';
import PromoVideo from './promoVideo';
import ServiceList from './serviceList';
import MeetTeam from './meetTeam';
import Contact from './contact';
import Footer from './footer';

const HomePage = () => {
  return (
    <div className='landing'>
      <ParticleBackground />
      <NavbarHome />
      <LandingHome />
      <WhoAreWe />
      <OurVision />
      {/* <OurCustomers /> */}
      {/* <PromoVideo /> */}
      <ServiceList id="service-list-section" />
      <MeetTeam />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
