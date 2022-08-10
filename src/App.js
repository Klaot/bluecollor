import React from 'react';
import AboutUs from './components/AboutUs.js';
import Clients from './components/Clients.js';
import Testimonial from './components/Feedback/Testimonial.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import OurServices from './components/OurServices.js';
import PricePlan from './components/PricePlan.js';
import StayUpdated from './components/StayUpdated.js';
import Subscribe from './components/Subscribe.js';
import TheGallery from './components/TheGallery.js';
import WhatWeOffer from './components/WhatWeOffer.js';
import WhyChooseUs from './components/WhyChooseUs.js';
import './styles/styles.scss';


function App() {
  return (
    <div className="App">
        {/* <Navigation />
        <Header /> */}
        <AboutUs/>
        <WhatWeOffer/>
        {/* <OurServices/>
        <WhyChooseUs/>
        <TheGallery/>
        <Testimonial/>
        <Clients/>
        <PricePlan/>
        <StayUpdated/>
        <Subscribe/>
        <Footer/> */}
    </div>
  );
}

export default App;
