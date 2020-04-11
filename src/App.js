import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/home';
import Gavin from './pages/gavin';
import TestApi from './pages/testApi';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/gavin">
          <Gavin />
        </Route>

        <Route path="/testApi">
          <TestApi />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
