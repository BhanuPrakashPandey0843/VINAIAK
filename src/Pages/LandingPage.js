import React from 'react';
import SolutionCard from '../Components/SolutionCard/SolutionCard'
import Navbar from '../Components/Navbar/Navbar'
import HeroSection from '../Components/HeroSection/HeroSection'
import OurClients from '../Components/OurClients/OurClients'
import MissionSection from '../Components/MissionSection/MissionSection'
import Footer from '../Components/Footer/Footer' // Ensure the path is correct

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar />
      <HeroSection />
      <OurClients />
      <SolutionCard />
      <MissionSection />
      <Footer />
    </div>
  );
};

export default LandingPage;