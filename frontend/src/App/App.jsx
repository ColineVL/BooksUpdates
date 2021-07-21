import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { NavBar, HomePage } from '../Components';

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/testHome" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}
