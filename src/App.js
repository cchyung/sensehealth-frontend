import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Home, Login, Dashboard, Groups, Profile, Settings } from './pages';

function App() {
  return (
    <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/groups">
              <Groups />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Router>
    </>
  )
}

export default App;
