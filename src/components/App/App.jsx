import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Feel from '../Feel/Feel';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

function App() {

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/understand'>
            <Understand />
          </Route>
          <Route path='/support'>
            <Support />
          </Route>
          <Route path='/comment'>
            <Comment />
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='/success'>
            <Success />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/'>
            <Feel />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
