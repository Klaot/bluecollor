import React from 'react';
import AboutUs from './components/AboutUs.js';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import OurServices from './components/OurServices.js';
import WhatWeOffer from './components/WhatWeOffer.js';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
        <AboutUs/>
        <WhatWeOffer/>
        <OurServices/>
    </div>
  );
}

export default App;
