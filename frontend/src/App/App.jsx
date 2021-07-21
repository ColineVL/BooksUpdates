import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from '../Components/Header';
import HomePage from '../Components/HomePage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/testHome" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}
