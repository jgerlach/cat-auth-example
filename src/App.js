import React, { Component } from 'react';
import store from './store';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar store={store} />
        <Switch>
          <Route path="/signup" render={() => <Signup store={store} />} />
          <Route path="/login" render={() => <Login store={store} />} />
          <Route path="/" render={() => <Home store={store} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
