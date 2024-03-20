import React from 'react';
import './App.css';
import rightBG from './assets/right-bg.png'; // Import the background image
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <div className="Split-container">
        <div className="Left-side">
          <img src={logo} alt="Top Image" className="Top-image" />
          <div className="Text-block Text-block-1">MELBOURNE</div>
          <div className="Text-block Text-block-2">BAYSIDE FENCING</div>
          <div className="Text-block Text-block-3">Simo & Lewis</div>
        </div>
        <div className="Right-side"></div> {/* This will have the background image */}
      </div>
    </div>
  );
}

export default App;
