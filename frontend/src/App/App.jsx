import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { TitleMenu, HomePage } from '../Components';

export default class App extends Component {
  render() {
    return (
      <Router>
        <TitleMenu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/testHome" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}
