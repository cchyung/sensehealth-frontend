import React from 'react';
import  { Link } from 'react-router-dom';

import useApi from '../hooks/useApi';
import { routes } from '../utils/constants';

import '../App.css';

function TestApi() {
  const response = useApi(routes.TEST_FRONTEND);

  return (
    <div className="App">
      <h1>Test API Page</h1>

      <p>This tests access to our API server, which is hosted on a separate Heroku instance. You should see some generic JSON below</p>
      
      <code>{JSON.stringify(response) || "If you see this, then API connection failed or is still loading."}</code>

      <br /><br />

      <Link to="/gavin">See Gavin Spin</Link>
    </div>
  );
}

export default TestApi;