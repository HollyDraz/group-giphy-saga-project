import React from 'react';
import axios from 'axios';
// import './App.css';
// imports for Route, Link, useHistory, components
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import './App.css';
import Search from '../Search/Search.jsx';
import Favorites from '../Favorites/Favorites.jsx';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Router>
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Router>
    </div>
  );
}

export default App;
