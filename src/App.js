import React from 'react';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
    </div>
  );
}

export default App;
