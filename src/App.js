import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/home/home';
import Gavin from './pages/gavin';
import TestApi from './pages/testApi';
import Menu from './pages/menu';

function App() {
  return (
    <>
        <Router>
          <Menu></Menu>
          <div className='page'>
            <Switch>
              <Route exact path="">
                <Home />
              </Route>
              <Route path="/gavin">
                <Gavin />
              </Route>
              <Route path="/testApi">
                <TestApi />
              </Route>
              <Route path="/dash">
                <TestApi />
              </Route>
            </Switch>
          </div>
        </Router>
    </>
  )
}

export default App;
