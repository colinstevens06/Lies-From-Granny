import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import logo from './logo.svg';

// Import Pages and navigation
import Nav from './components/global/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Shows from './pages/Shows'
import Songs from './pages/Songs'

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <div>
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={800}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/contact">
                    <Contact />
                  </Route>
                  <Route exact path="/shows">
                    <Shows />
                  </Route>
                  <Route exact path="/songs">
                    <Songs />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
