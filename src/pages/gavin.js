import React from 'react';
import gavin from '../gavin.jpg'
import '../App.css';

function Gavin() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gavin} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Gavin;