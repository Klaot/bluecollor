import React from 'react';
import AboutUs from './components/AboutUs.js';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
        <AboutUs/>
    </div>
  );
}

export default App;
