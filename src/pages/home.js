import React from 'react';
import  { Link } from 'react-router-dom';

import '../App.css';

function Home() {
  return (
    <div className="App">
      <h1>Home Page</h1>

      <Link to="/gavin">See Gavin Spin</Link>
      <br />
      <Link to="/testApi">Test API</Link>
    </div>
  );
}

export default Home;