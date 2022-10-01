import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/understand'>

          </Route>
          <Route path='/support'>

          </Route>
          <Route path='/comment'>

          </Route>
          <Route path='/'>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
