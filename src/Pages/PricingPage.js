import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import PricingComponent from '../Components/PricingComponent/PricingComponent'
import Footer from '../Components/Footer/Footer' 
const PricingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
      <PricingComponent/>
      <Footer />
    </div>
  )
}

export default PricingPage
